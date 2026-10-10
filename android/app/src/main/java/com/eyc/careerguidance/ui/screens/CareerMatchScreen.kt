package com.eyc.careerguidance.ui.screens

import androidx.compose.foundation.clickable
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
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.CompareArrows
import androidx.compose.material.icons.filled.TrendingUp
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
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

data class CareerMatchUi(
    val id: String,
    val title: String,
    val category: String,
    val overallMatch: Int,
    val aptitudeMatch: Int,
    val skillMatch: Int,
    val salaryRange: String,
    val growthOutlook: String,
    val description: String,
    val whyFitExplanation: List<String>,
    val coreCompetencies: List<String>,
    val dayInTheLife: String
)

@Composable
fun CareerMatchScreen(
    careerMatches: List<CareerMatchUi>,
    onSelectCareer: (CareerMatchUi) -> Unit,
    onNavigateToPathway: (String) -> Unit,
    onNavigateToSkillGap: (String) -> Unit = {},
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedCareerId by remember {
        mutableStateOf(careerMatches.firstOrNull()?.id.orEmpty())
    }
    var isCompareMode by remember { mutableStateOf(false) }

    val selectedCareer = careerMatches.find { it.id == selectedCareerId } ?: careerMatches.firstOrNull()

    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Career Matches & Explanation",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack,
                actions = {
                    IconButton(onClick = { isCompareMode = !isCompareMode }) {
                        Icon(
                            imageVector = Icons.Default.CompareArrows,
                            contentDescription = "Compare Roles"
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
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = if (isCompareMode) "Role Suitability Comparison" else "Ranked Career Trajectories",
                            style = MaterialTheme.typography.titleLarge,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Text(
                            text = "Calibrated using RIASEC aptitude, skill audits, and student interest profile.",
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            // Quick Role Switcher Strip
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    careerMatches.forEach { match ->
                        val isSelected = match.id == selectedCareerId
                        ElevatedCard(
                            modifier = Modifier
                                .weight(1f)
                                .clickable { selectedCareerId = match.id },
                            colors = CardDefaults.elevatedCardColors(
                                containerColor = if (isSelected) {
                                    MaterialTheme.colorScheme.primaryContainer
                                } else {
                                    MaterialTheme.colorScheme.surface
                                }
                            )
                        ) {
                            Column(
                                modifier = Modifier.padding(12.dp),
                                horizontalAlignment = Alignment.CenterHorizontally
                            ) {
                                Text(
                                    text = "${match.overallMatch}%",
                                    style = MaterialTheme.typography.titleLarge,
                                    color = if (isSelected) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurface
                                )
                                Text(
                                    text = match.title,
                                    style = MaterialTheme.typography.labelSmall,
                                    maxLines = 1,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                            }
                        }
                    }
                }
            }

            if (isCompareMode) {
                // Side-by-side comparison matrix items
                items(careerMatches) { career ->
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
                                Column(modifier = Modifier.weight(1f)) {
                                    Text(
                                        text = career.title,
                                        style = MaterialTheme.typography.titleMedium,
                                        color = MaterialTheme.colorScheme.onSurface
                                    )
                                    Text(
                                        text = career.category,
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }
                                Text(
                                    text = "${career.overallMatch}% Match",
                                    style = MaterialTheme.typography.titleMedium,
                                    color = MaterialTheme.colorScheme.primary
                                )
                            }

                            Spacer(modifier = Modifier.height(10.dp))

                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                Text("Aptitude: ${career.aptitudeMatch}%", style = MaterialTheme.typography.labelSmall)
                                Text("Skills: ${career.skillMatch}%", style = MaterialTheme.typography.labelSmall)
                                Text("Salary: ${career.salaryRange}", style = MaterialTheme.typography.labelSmall)
                            }

                            Spacer(modifier = Modifier.height(8.dp))

                            Text(
                                text = "Relevant Strength: ${career.whyFitExplanation.firstOrNull().orEmpty()}",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }

                item {
                    OutlinedButton(
                        onClick = { isCompareMode = false },
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text("Back to Role Details")
                    }
                }
            } else if (selectedCareer != null) {
                // Main Selected Career Card
                item {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = MaterialTheme.shapes.large
                    ) {
                        Column(modifier = Modifier.padding(20.dp)) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Column(modifier = Modifier.weight(1f)) {
                                    Text(
                                        text = selectedCareer.title,
                                        style = MaterialTheme.typography.headlineSmall,
                                        color = MaterialTheme.colorScheme.onSurface
                                    )
                                    Text(
                                        text = selectedCareer.category,
                                        style = MaterialTheme.typography.bodyMedium,
                                        color = MaterialTheme.colorScheme.primary
                                    )
                                }
                                CircularScoreIndicator(
                                    score = selectedCareer.overallMatch,
                                    size = 80.dp,
                                    strokeWidth = 7.dp,
                                    label = "Fit"
                                )
                            }

                            Spacer(modifier = Modifier.height(16.dp))

                            // Market Data
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                Column {
                                    Text(
                                        text = "Average Salary",
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                    Text(
                                        text = selectedCareer.salaryRange,
                                        style = MaterialTheme.typography.titleSmall,
                                        color = MaterialTheme.colorScheme.onSurface
                                    )
                                }
                                Column(horizontalAlignment = Alignment.End) {
                                    Text(
                                        text = "Growth Outlook",
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                    Row(verticalAlignment = Alignment.CenterVertically) {
                                        Icon(
                                            imageVector = Icons.Default.TrendingUp,
                                            contentDescription = null,
                                            tint = MaterialTheme.colorScheme.primary
                                        )
                                        Text(
                                            text = selectedCareer.growthOutlook,
                                            style = MaterialTheme.typography.titleSmall,
                                            color = MaterialTheme.colorScheme.primary
                                        )
                                    }
                                }
                            }
                        }
                    }
                }

                // Why This Fits You Explanation
                item {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = MaterialTheme.shapes.medium
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(
                                text = "Why This Role Fits You",
                                style = MaterialTheme.typography.titleMedium,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            selectedCareer.whyFitExplanation.forEach { reason ->
                                Row(
                                    modifier = Modifier.padding(vertical = 4.dp),
                                    verticalAlignment = Alignment.Top
                                ) {
                                    Icon(
                                        imageVector = Icons.Default.Check,
                                        contentDescription = null,
                                        tint = MaterialTheme.colorScheme.primary,
                                        modifier = Modifier.padding(top = 2.dp, end = 8.dp)
                                    )
                                    Text(
                                        text = reason,
                                        style = MaterialTheme.typography.bodyMedium,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }
                            }
                        }
                    }
                }

                // Day in the Life
                item {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = MaterialTheme.shapes.medium
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(
                                text = "Day in the Life",
                                style = MaterialTheme.typography.titleMedium,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Spacer(modifier = Modifier.height(6.dp))
                            Text(
                                text = selectedCareer.dayInTheLife,
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }

                // Primary CTA
                item {
                    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Button(
                            onClick = { onNavigateToPathway(selectedCareer.id) },
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Text(text = "View Learning Pathway for ${selectedCareer.title}")
                        }
                        OutlinedButton(
                            onClick = { onNavigateToSkillGap(selectedCareer.id) },
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Text(text = "Inspect Specific Skill Gaps")
                        }
                    }
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun CareerMatchPreview() {
    EYCCareerTheme {
        CareerMatchScreen(
            careerMatches = listOf(
                CareerMatchUi(
                    id = "1",
                    title = "AI Application Engineer",
                    category = "Applied AI",
                    overallMatch = 94,
                    aptitudeMatch = 96,
                    skillMatch = 88,
                    salaryRange = "$125,000 - $165,000",
                    growthOutlook = "+28%",
                    description = "Bridges production mobile software with foundational AI models.",
                    whyFitExplanation = listOf("Investigative aptitude 96%", "Strong Kotlin proficiency"),
                    coreCompetencies = listOf("Compose", "Prompt engineering"),
                    dayInTheLife = "Implement UI, configure vector APIs, and measure latency."
                )
            ),
            onSelectCareer = {},
            onNavigateToPathway = {},
            onNavigateBack = {}
        )
    }
}
