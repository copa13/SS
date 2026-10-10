package com.eyc.careerguidance.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
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
import androidx.compose.material.icons.filled.BookOpen
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Code
import androidx.compose.material.icons.filled.School
import androidx.compose.material.icons.filled.Zap
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Checkbox
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar
import com.eyc.careerguidance.ui.theme.EYCCareerTheme

data class PathwayModuleUi(
    val id: String,
    val phase: Int,
    val phaseName: String,
    val title: String,
    val description: String,
    val isCompleted: Boolean,
    val items: List<PathwayTaskUi>
)

data class PathwayTaskUi(
    val id: String,
    val title: String,
    val type: String,
    val isCompleted: Boolean
)

data class PathwayStageStepUi(
    val stepNumber: Int,
    val title: String,
    val description: String,
    val isCompleted: Boolean,
    val isActive: Boolean = false
)

val VisualPathwayStages = listOf(
    PathwayStageStepUi(1, "Current Skills", "Kotlin, Compose basics, OOP verified", isCompleted = true),
    PathwayStageStepUi(2, "Missing Skills", "Cloud Docker and vector index gaps identified", isCompleted = true),
    PathwayStageStepUi(3, "Learning Resources", "Official Compose codelabs and Cloud Run docs", isCompleted = true),
    PathwayStageStepUi(4, "Practice Activities", "Code drills in Flow backpressure and layouts", isCompleted = true),
    PathwayStageStepUi(5, "Practical Projects", "EYC Native Capstone and Semantic Search engine", isCompleted = false, isActive = true),
    PathwayStageStepUi(6, "Improvement & Refinement", "Frame latency profiling & Room caching", isCompleted = false),
    PathwayStageStepUi(7, "Re-assessment", "Re-evaluate readiness index against rubric", isCompleted = false),
    PathwayStageStepUi(8, "Career Ready", "Verified portfolio & exportable readiness report", isCompleted = false)
)

@Composable
fun LearningPathwayScreen(
    modules: List<PathwayModuleUi>,
    onToggleTask: (moduleId: String, taskId: String) -> Unit,
    onNavigateBack: () -> Unit,
    onNavigateToProjects: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Learning-to-Career Pathway",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack
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
                Text(
                    text = "Visual Step-by-Step Career Pathway",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Text(
                    text = "Current Skills → Missing Skills → Learning Resources → Practice → Practical Projects → Improvement → Re-assessment → Career Ready",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.primary
                )
            }

            // 8-Stage Progression Stepper
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.large
                ) {
                    Column(modifier = Modifier.padding(14.dp)) {
                        Text(
                            text = "8-STAGE CAREER PROGRESSION MODEL",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )

                        Spacer(modifier = Modifier.height(10.dp))

                        VisualPathwayStages.forEach { stage ->
                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(vertical = 4.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Box(
                                    modifier = Modifier
                                        .size(24.dp)
                                        .background(
                                            color = when {
                                                stage.isCompleted -> MaterialTheme.colorScheme.primary
                                                stage.isActive -> MaterialTheme.colorScheme.tertiary
                                                else -> MaterialTheme.colorScheme.surfaceVariant
                                            },
                                            shape = MaterialTheme.shapes.extraSmall
                                        ),
                                    contentAlignment = Alignment.Center
                                ) {
                                    if (stage.isCompleted) {
                                        Icon(
                                            imageVector = Icons.Default.Check,
                                            contentDescription = null,
                                            tint = MaterialTheme.colorScheme.onPrimary,
                                            modifier = Modifier.size(14.dp)
                                        )
                                    } else {
                                        Text(
                                            text = stage.stepNumber.toString(),
                                            style = MaterialTheme.typography.labelSmall,
                                            color = if (stage.isActive) MaterialTheme.colorScheme.onTertiary else MaterialTheme.colorScheme.onSurfaceVariant
                                        )
                                    }
                                }

                                Spacer(modifier = Modifier.size(10.dp))

                                Column(modifier = Modifier.weight(1f)) {
                                    Text(
                                        text = stage.title,
                                        style = MaterialTheme.typography.labelMedium,
                                        color = if (stage.isActive) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurface
                                    )
                                    Text(
                                        text = stage.description,
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }
                            }
                        }
                    }
                }
            }

            // Next Recommended Action Banner
            item {
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable { onNavigateToProjects() },
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                    )
                ) {
                    Row(
                        modifier = Modifier.padding(14.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.Zap,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.primary
                        )
                        Spacer(modifier = Modifier.size(10.dp))
                        Column {
                            Text(
                                text = "Next Recommended Action",
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.primary
                            )
                            Text(
                                text = "Work on Capstone Milestone: Room DB offline caching",
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onPrimaryContainer
                            )
                        }
                    }
                }
            }

            // Ordered Modules Timeline
            items(modules) { module ->
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
                                text = module.phaseName,
                                style = MaterialTheme.typography.labelMedium,
                                color = MaterialTheme.colorScheme.primary
                            )
                            if (module.isCompleted) {
                                Row(verticalAlignment = Alignment.CenterVertically) {
                                    Icon(
                                        imageVector = Icons.Default.CheckCircle,
                                        contentDescription = "Completed",
                                        tint = MaterialTheme.colorScheme.primary
                                    )
                                    Text(
                                        text = " Completed",
                                        style = MaterialTheme.typography.labelSmall,
                                        color = MaterialTheme.colorScheme.primary
                                    )
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(4.dp))

                        Text(
                            text = module.title,
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.onSurface
                        )

                        Spacer(modifier = Modifier.height(4.dp))

                        Text(
                            text = module.description,
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )

                        Spacer(modifier = Modifier.height(12.dp))

                        module.items.forEach { task ->
                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(vertical = 4.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Checkbox(
                                    checked = task.isCompleted,
                                    onCheckedChange = { onToggleTask(module.id, task.id) }
                                )
                                Column(modifier = Modifier.weight(1f)) {
                                    Text(
                                        text = task.title,
                                        style = MaterialTheme.typography.bodyMedium,
                                        color = if (task.isCompleted) {
                                            MaterialTheme.colorScheme.onSurfaceVariant
                                        } else {
                                            MaterialTheme.colorScheme.onSurface
                                        }
                                    )
                                    Text(
                                        text = task.type,
                                        style = MaterialTheme.typography.labelSmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }
                            }
                        }
                    }
                }
            }

            item {
                Button(
                    onClick = onNavigateToProjects,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(text = "Proceed to Practical Projects Tracker")
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun LearningPathwayPreview() {
    EYCCareerTheme {
        LearningPathwayScreen(
            modules = listOf(
                PathwayModuleUi(
                    id = "pm_1",
                    phase = 1,
                    phaseName = "Phase 1: Foundations",
                    title = "Compose Core & Declarative State",
                    description = "Master unidirectional data flow.",
                    isCompleted = true,
                    items = listOf(
                        PathwayTaskUi("t1", "State hoisting codelab", "Course", true)
                    )
                )
            ),
            onToggleTask = { _, _ -> },
            onNavigateBack = {}
        )
    }
}
