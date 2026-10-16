// Practical Skill Challenges for Direct Applied Evidence
// Modeled on PDF Page 5: "Candidate Claim: Python — Advanced; Challenge: data processing, API/data handling, or problem-solving task"

export const PRACTICAL_CHALLENGES = [
  {
    id: 'python-stream-parser',
    title: 'Python: Async Telemetry Stream & Batch Filter',
    skillTarget: 'Python (Advanced)',
    roleType: 'Junior AI / Python Developer',
    difficulty: 'Production Practical',
    timeLimit: '25 mins',
    description: `Implement a resilient telemetry event normalizer that processes batched JSON records. 
The function must:
1. Parse streaming payload objects, discarding malformed entries without throwing fatal exceptions.
2. Filter out readings outside plausible physical sensor thresholds (temp: -50 to 150 °C).
3. Aggregate average temperature per device ID and compute exponential moving averages.
4. Return an explainable summary with total parsed, anomaly count, and valid device telemetry maps.`,
    initialCode: `def process_telemetry_batch(raw_payloads: list) -> dict:
    """
    Candidate Implementation: SkillProof Practical Verification Sandbox
    Claim: Python (Advanced)
    """
    valid_devices = {}
    anomalies = 0
    total_parsed = 0
    
    for item in raw_payloads:
        # Validate schema structure
        if not isinstance(item, dict):
            anomalies += 1
            continue
            
        device_id = item.get("device_id")
        temp = item.get("temp")
        timestamp = item.get("timestamp")
        
        # Verify types and presence
        if not device_id or temp is None or timestamp is None:
            anomalies += 1
            continue
            
        try:
            temp_val = float(temp)
        except (ValueError, TypeError):
            anomalies += 1
            continue
            
        # Range validation (-50 to 150 C)
        if temp_val < -50.0 or temp_val > 150.0:
            anomalies += 1
            continue
            
        total_parsed += 1
        if device_id not in valid_devices:
            valid_devices[device_id] = {
                "readings": [],
                "avg_temp": 0.0,
                "latest_ts": timestamp
            }
            
        valid_devices[device_id]["readings"].append(temp_val)
        readings = valid_devices[device_id]["readings"]
        valid_devices[device_id]["avg_temp"] = round(sum(readings) / len(readings), 2)
        valid_devices[device_id]["latest_ts"] = max(valid_devices[device_id]["latest_ts"], timestamp)
        
    return {
        "status": "success",
        "total_parsed": total_parsed,
        "anomalies": anomalies,
        "active_devices": len(valid_devices),
        "device_summaries": valid_devices
    }
`,
    testCases: [
      {
        id: 'tc-1',
        name: 'Standard Clean Payloads',
        input: '[{"device_id": "sensor-alpha", "temp": 24.5, "timestamp": 1700000000}, {"device_id": "sensor-alpha", "temp": 25.5, "timestamp": 1700000060}]',
        expected: 'Parsed 2 readings, 0 anomalies, avg 25.0°C',
        status: 'PASSED'
      },
      {
        id: 'tc-2',
        name: 'Malformed & Corrupted Records Resilience',
        input: '["string-instead-of-json", {"device_id": "sensor-beta", "temp": "invalid"}, {"temp": 12.0}]',
        expected: 'Gracefully handled: 3 anomalies caught, 0 unhandled exceptions',
        status: 'PASSED'
      },
      {
        id: 'tc-3',
        name: 'Out of Bound Physical Thresholds',
        input: '[{"device_id": "sensor-gamma", "temp": 999.0, "timestamp": 1700000100}, {"device_id": "sensor-gamma", "temp": -40.0, "timestamp": 1700000105}]',
        expected: 'Discarded 999°C reading, accepted -40°C valid telemetry',
        status: 'PASSED'
      }
    ],
    evaluationRubric: {
      correctness: { score: 98, weight: 30, notes: 'Passed all edge cases, missing keys, and type coercions.' },
      approach: { score: 94, weight: 25, notes: 'Used dict lookup and defensive parsing without crashing.' },
      codeQuality: { score: 92, weight: 20, notes: 'Clear variable names, type hints, and docstrings included.' },
      efficiency: { score: 90, weight: 15, notes: 'O(N) single-pass linear time complexity.' },
      explanation: { score: 95, weight: 10, notes: 'Explainable output structure enables direct telemetry inspection.' }
    },
    compositeEvidenceScore: 94,
    awardedTier: 'Strong',
    geminiEvaluationSummary: 'Candidate demonstrated rigorous defensive programming in Python. Successfully filtered malformed strings, null IDs, and physical sensor range violations in O(N) time with zero uncaught exceptions. Verified as applied Python evidence.'
  },
  {
    id: 'sql-query-challenge',
    title: 'SQL: High-Throughput Aggregation & Indexing',
    skillTarget: 'SQL (Intermediate / Advanced)',
    roleType: 'Backend / Database Engineer',
    difficulty: 'Real-world Query Tuning',
    timeLimit: '20 mins',
    description: `Write a high-performance query to compute 30-day retention metrics for an e-commerce platform across 5 million transactions without table full scans.`,
    initialCode: `WITH first_orders AS (
    SELECT 
        user_id, 
        DATE_TRUNC('month', MIN(order_timestamp)) AS cohort_month
    FROM orders
    GROUP BY user_id
),
monthly_activity AS (
    SELECT 
        o.user_id,
        fo.cohort_month,
        DATE_PART('month', AGE(o.order_timestamp, fo.cohort_month)) AS month_offset
    FROM orders o
    JOIN first_orders fo ON o.user_id = fo.user_id
    WHERE o.order_status = 'COMPLETED'
)
SELECT 
    cohort_month,
    month_offset,
    COUNT(DISTINCT user_id) AS active_users
FROM monthly_activity
GROUP BY cohort_month, month_offset
ORDER BY cohort_month, month_offset;`,
    testCases: [
      { id: 'tc-sql-1', name: 'Cohort Generation Logic', input: 'Sample dataset of 1,000 customers', expected: 'Accurate retention curve by cohort', status: 'PASSED' },
      { id: 'tc-sql-2', name: 'Index Utilization Check', input: 'EXPLAIN ANALYZE on 500k rows', expected: 'Index scan on (user_id, order_timestamp)', status: 'PASSED' }
    ],
    evaluationRubric: {
      correctness: { score: 92, weight: 30, notes: 'Accurate windowing and cohort offset calculation.' },
      approach: { score: 88, weight: 25, notes: 'Clean CTE breakdown; needs compound index on (user_id, order_status).' },
      codeQuality: { score: 90, weight: 20, notes: 'Well-formatted SQL with standard ISO date functions.' },
      efficiency: { score: 85, weight: 15, notes: 'Good CTE utilization; temporary materialization can be optimized.' },
      explanation: { score: 88, weight: 10, notes: 'Concise explanation of user retention cohorts.' }
    },
    compositeEvidenceScore: 89,
    awardedTier: 'Moderate to Strong',
    geminiEvaluationSummary: 'Solid CTE structure and window logic. Meets database requirement criteria for intermediate to advanced backend engineers.'
  }
];
