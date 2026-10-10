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
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.RadioButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar
import com.eyc.careerguidance.ui.theme.EYCCareerTheme

data class AptitudeQuestionUi(
    val id: String,
    val category: String,
    val question: String,
    val description: String,
    val options: List<AptitudeOptionUi>
)

data class AptitudeOptionUi(
    val label: String,
    val score: Int
)

data class AptitudeTraitScoreUi(
    val trait: String,
    val score: Int,
    val description: String
)

val SampleTraitScores = listOf(
    AptitudeTraitScoreUi("Investigative", 96, "Excels at complex algorithmic decomposition, data research, and logic synthesis."),
    AptitudeTraitScoreUi("Realistic", 88, "Prefers hands-on system building, writing robust code, and tooling execution."),
    AptitudeTraitScoreUi("Conventional", 82, "Strong discipline for test suites, architectural design patterns, and standards."),
    AptitudeTraitScoreUi("Artistic", 76, "Values intuitive UX ergonomics, accessible design systems, and aesthetic craft."),
    AptitudeTraitScoreUi("Social", 70, "Effective collaborator in engineering sprints, peer code reviews, and pair programming."),
    AptitudeTraitScoreUi("Enterprising", 64, "Capable of presenting technical project demos and communicating product value.")
)

@Composable
fun AptitudeAssessmentScreen(
    questions: List<AptitudeQuestionUi>,
    onCompleteAssessment: (Map<String, Int>) -> Unit,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    var currentQuestionIndex by remember { mutableIntStateOf(0) }
    var isAssessmentSubmitted by remember { mutableStateOf(false) }
    val selectedAnswers = remember { mutableStateMapOf<String, Int>() }

    val currentQuestion = questions.getOrNull(currentQuestionIndex)
    val progress = if (questions.isNotEmpty()) {
        (currentQuestionIndex + 1).toFloat() / questions.size
    } else 0f

    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = if (isAssessmentSubmitted) "Aptitude Result Summary" else "Interest & Aptitude Assessment",
                canNavigateBack = true,
                onNavigateBack = {
                    if (isAssessmentSubmitted) isAssessmentSubmitted = false else onNavigateBack()
                }
            )
        },
        modifier = modifier
    ) { innerPadding ->
        if (isAssessmentSubmitted) {
            // Dedicated Assessment Completion & Trait Result Summary Screen
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding),
                contentPadding = PaddingValues(16.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                item {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = MaterialTheme.shapes.large,
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                        )
                    ) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(20.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Icon(
                                imageVector = Icons.Default.CheckCircle,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.primary,
                                modifier = Modifier.size(56.dp)
                            )
                            Spacer(modifier = Modifier.height(12.dp))
                            Text(
                                text = "Assessment Successfully Completed",
                                style = MaterialTheme.typography.labelMedium,
                                color = MaterialTheme.colorScheme.primary
                            )
                            Text(
                                text = "Aptitude Profile Calibrated",
                                style = MaterialTheme.typography.titleLarge,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                text = "Holland Code: IRC (Investigative - Realistic - Conventional)",
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.primary,
                                fontFamily = FontFamily.Monospace
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = "Your dominant trait is Investigative (96%), indicating exceptional alignment for research, AI systems, and engineering.",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }

                item {
                    Text(
                        text = "RIASEC Trait Breakdown",
                        style = MaterialTheme.typography.titleMedium,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }

                items(SampleTraitScores) { traitItem ->
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = MaterialTheme.shapes.medium
                    ) {
                        Column(modifier = Modifier.padding(14.dp)) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                Text(
                                    text = traitItem.trait,
                                    style = MaterialTheme.typography.titleSmall,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                                Text(
                                    text = "${traitItem.score}%",
                                    style = MaterialTheme.typography.titleSmall,
                                    color = MaterialTheme.colorScheme.primary
                                )
                            }
                            Spacer(modifier = Modifier.height(6.dp))
                            LinearProgressIndicator(
                                progress = { traitItem.score / 100f },
                                modifier = Modifier.fillMaxWidth()
                            )
                            Spacer(modifier = Modifier.height(6.dp))
                            Text(
                                text = traitItem.description,
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }

                item {
                    Button(
                        onClick = { onCompleteAssessment(selectedAnswers) },
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(text = "Proceed to Career Matching")
                    }
                }
            }
            return@Scaffold
        }

        if (currentQuestion == null) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = "No assessment questions loaded.",
                    style = MaterialTheme.typography.bodyLarge
                )
            }
            return@Scaffold
        }

        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Stepper and Category Tag
            item {
                Column {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "Question ${currentQuestionIndex + 1} of ${questions.size}",
                            style = MaterialTheme.typography.labelMedium,
                            color = MaterialTheme.colorScheme.primary
                        )
                        Text(
                            text = "Pillar: ${currentQuestion.category}",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }

                    Spacer(modifier = Modifier.height(8.dp))

                    LinearProgressIndicator(
                        progress = { progress },
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            }

            // Question Card
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.large,
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                    )
                ) {
                    Column(modifier = Modifier.padding(20.dp)) {
                        Text(
                            text = currentQuestion.question,
                            style = MaterialTheme.typography.titleLarge,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        Text(
                            text = currentQuestion.description,
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            // Options List
            item {
                Text(
                    text = "Select your affinity:",
                    style = MaterialTheme.typography.titleSmall,
                    color = MaterialTheme.colorScheme.onSurface
                )
            }

            items(currentQuestion.options.size) { index ->
                val option = currentQuestion.options[index]
                val isSelected = selectedAnswers[currentQuestion.id] == option.score

                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable {
                            selectedAnswers[currentQuestion.id] = option.score
                        },
                    shape = MaterialTheme.shapes.medium,
                    colors = CardDefaults.cardColors(
                        containerColor = if (isSelected) {
                            MaterialTheme.colorScheme.primaryContainer
                        } else {
                            MaterialTheme.colorScheme.surface
                        }
                    )
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 12.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        RadioButton(
                            selected = isSelected,
                            onClick = { selectedAnswers[currentQuestion.id] = option.score }
                        )
                        Text(
                            text = option.label,
                            style = MaterialTheme.typography.bodyMedium,
                            color = if (isSelected) {
                                MaterialTheme.colorScheme.onPrimaryContainer
                            } else {
                                MaterialTheme.colorScheme.onSurface
                            },
                            modifier = Modifier.padding(start = 8.dp)
                        )
                    }
                }
            }

            // Bottom Navigation Stepper
            item {
                Spacer(modifier = Modifier.height(16.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    if (currentQuestionIndex > 0) {
                        OutlinedButton(
                            onClick = { currentQuestionIndex-- },
                            modifier = Modifier.weight(1f)
                        ) {
                            Text(text = "Previous")
                        }
                    }

                    Button(
                        onClick = {
                            if (currentQuestionIndex < questions.size - 1) {
                                currentQuestionIndex++
                            } else {
                                isAssessmentSubmitted = true
                            }
                        },
                        enabled = selectedAnswers.containsKey(currentQuestion.id),
                        modifier = Modifier.weight(1f)
                    ) {
                        Text(
                            text = if (currentQuestionIndex < questions.size - 1) "Next" else "Complete & View Summary"
                        )
                    }
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun AptitudeAssessmentPreview() {
    EYCCareerTheme {
        AptitudeAssessmentScreen(
            questions = listOf(
                AptitudeQuestionUi(
                    id = "1",
                    category = "Investigative",
                    question = "How much do you enjoy analyzing data?",
                    description = "Investigative focus tracks analytical problem solving.",
                    options = listOf(
                        AptitudeOptionUi("Slightly", 1),
                        AptitudeOptionUi("Strongly", 5)
                    )
                )
            ),
            onCompleteAssessment = {},
            onNavigateBack = {}
        )
    }
}
