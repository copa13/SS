package com.eyc.careerguidance.ui.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.History
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.TrendingUp
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.CircularScoreIndicator
import com.eyc.careerguidance.ui.components.EYCTopAppBar
import com.eyc.careerguidance.ui.theme.EYCCareerTheme

data class ReadinessPillarUi(
    val name: String,
    val score: Int,
    val status: String,
    val feedback: String
)

data class AssessmentHistoryUi(
    val date: String,
    val attemptName: String,
    val overallScore: Int,
    val deltaGain: Int
)

val SampleHistoricalData = listOf(
    AssessmentHistoryUi("Aug 12, 2026", "Initial Baseline Assessment", 64, 0),
    AssessmentHistoryUi("Sep 18, 2026", "Mid-Pathway Re-assessment", 72, 8),
    AssessmentHistoryUi("Oct 08, 2026", "Current Calibrated Re-assessment", 78, 6)
)

@Composable
fun CareerReadinessScreen(
    overallScore: Int,
    targetRole: String,
    pillars: List<ReadinessPillarUi>,
    onTriggerReAssessment: () -> Unit,
    onViewDetailedReport: () -> Unit,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    var isHistoryMode by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Career Readiness & Re-assessment",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack,
                actions = {
                    IconButton(onClick = { isHistoryMode = !isHistoryMode }) {
                        Icon(
                            imageVector = Icons.Default.History,
                            contentDescription = "View History"
                        )
                    }
                }
            )
        },
        modifier = modifier
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Overall Gauge Card
            item {
                ElevatedCard(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.large
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(24.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        CircularScoreIndicator(
                            score = overallScore,
                            size = 130.dp,
                            strokeWidth = 11.dp,
                            label = "Readiness"
                        )
                        Spacer(modifier = Modifier.height(14.dp))
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(
                                imageVector = Icons.Default.TrendingUp,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.primary
                            )
                            Spacer(modifier = Modifier.size(6.dp))
                            Text(
                                text = "+14% Net Improvement Over Time",
                                style = MaterialTheme.typography.labelMedium,
                                color = MaterialTheme.colorScheme.primary
                            )
                        }
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "Hiring Benchmark: $targetRole",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Text(
                            text = "Calibrated based on RIASEC aptitude, verified skill levels, and capstone commits.",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            if (isHistoryMode) {
                // Historical comparisons list
                item {
                    Text(
                        text = "Historical Assessment Comparisons",
                        style = MaterialTheme.typography.titleMedium,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }

                items(SampleHistoricalData) { attempt ->
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = MaterialTheme.shapes.medium
                    ) {
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column {
                                Text(
                                    text = attempt.attemptName,
                                    style = MaterialTheme.typography.titleSmall,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                                Text(
                                    text = attempt.date,
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                            Column(horizontalAlignment = Alignment.End) {
                                Text(
                                    text = "${attempt.overallScore}%",
                                    style = MaterialTheme.typography.titleMedium,
                                    color = MaterialTheme.colorScheme.primary
                                )
                                if (attempt.deltaGain > 0) {
                                    Text(
                                        text = "+${attempt.deltaGain}% Gain",
                                        style = MaterialTheme.typography.labelSmall,
                                        color = MaterialTheme.colorScheme.primary
                                    )
                                }
                            }
                        }
                    }
                }

                item {
                    OutlinedButton(
                        onClick = { isHistoryMode = false },
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text("Show Competency Pillars")
                    }
                }
            } else {
                // Pillars Breakdown
                item {
                    Text(
                        text = "Core Competency Pillars",
                        style = MaterialTheme.typography.titleMedium,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }

                items(pillars) { pillar ->
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = MaterialTheme.shapes.medium
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = pillar.name,
                                    style = MaterialTheme.typography.titleSmall,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                                Text(
                                    text = "${pillar.score}% · ${pillar.status}",
                                    style = MaterialTheme.typography.labelSmall,
                                    color = MaterialTheme.colorScheme.primary
                                )
                            }

                            Spacer(modifier = Modifier.height(6.dp))

                            LinearProgressIndicator(
                                progress = { pillar.score / 100f },
                                modifier = Modifier.fillMaxWidth()
                            )

                            Spacer(modifier = Modifier.height(8.dp))

                            Text(
                                text = pillar.feedback,
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }
            }

            // Actions
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    OutlinedButton(
                        onClick = onTriggerReAssessment,
                        modifier = Modifier.weight(1f)
                    ) {
                        Icon(
                            imageVector = Icons.Default.Refresh,
                            contentDescription = null,
                            modifier = Modifier.padding(end = 4.dp)
                        )
                        Text(text = "Re-assess")
                    }

                    Button(
                        onClick = onViewDetailedReport,
                        modifier = Modifier.weight(1f)
                    ) {
                        Text(text = "Export Report")
                    }
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun CareerReadinessPreview() {
    EYCCareerTheme {
        CareerReadinessScreen(
            overallScore = 78,
            targetRole = "AI Application Engineer",
            pillars = listOf(
                ReadinessPillarUi("Aptitude Alignment", 92, "High", "Strong algorithmic mindset"),
                ReadinessPillarUi("Technical Competence", 78, "On Track", "Proficient in Jetpack Compose")
            ),
            onTriggerReAssessment = {},
            onViewDetailedReport = {},
            onNavigateBack = {}
        )
    }
}
