package com.eyc.careerguidance.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.eyc.careerguidance.ui.screens.AICareerGuidanceScreen
import com.eyc.careerguidance.ui.screens.AptitudeAssessmentScreen
import com.eyc.careerguidance.ui.screens.CareerMatchScreen
import com.eyc.careerguidance.ui.screens.CareerReadinessReportScreen
import com.eyc.careerguidance.ui.screens.CareerReadinessScreen
import com.eyc.careerguidance.ui.screens.HomeScreen
import com.eyc.careerguidance.ui.screens.LearningPathwayScreen
import com.eyc.careerguidance.ui.screens.PracticalProjectsScreen
import com.eyc.careerguidance.ui.screens.SkillAssessmentScreen
import com.eyc.careerguidance.ui.screens.SkillGapScreen
import com.eyc.careerguidance.ui.screens.StudentProfileScreen

@Composable
fun EYCNavHost(
    navController: NavHostController,
    modifier: Modifier = Modifier
) {
    NavHost(
        navController = navController,
        startDestination = EYCDestination.Splash.route,
        modifier = modifier
    ) {
        composable(EYCDestination.Splash.route) {
            com.eyc.careerguidance.ui.screens.SplashScreen(
                onNavigateToLogin = {
                    navController.navigate(EYCDestination.Login.route) {
                        popUpTo(EYCDestination.Splash.route) { inclusive = true }
                    }
                }
            )
        }

        composable(EYCDestination.Login.route) {
            com.eyc.careerguidance.ui.screens.LoginScreen(
                onLoginSuccess = { _, _, _ ->
                    // Navigate directly to Profile (Step 01) first, before Dashboard!
                    navController.navigate(EYCDestination.Profile.route) {
                        popUpTo(EYCDestination.Login.route) { inclusive = true }
                    }
                },
                onExploreAsGuest = {
                    navController.navigate(EYCDestination.Profile.route) {
                        popUpTo(EYCDestination.Login.route) { inclusive = true }
                    }
                }
            )
        }

        composable(EYCDestination.Home.route) {
            HomeScreen(
                studentName = "Alex Rivera",
                targetRole = "AI Application Engineer",
                readinessScore = 78,
                onNavigateToProfile = { navController.navigate(EYCDestination.Profile.route) },
                onNavigateToAptitude = { navController.navigate(EYCDestination.AptitudeAssessment.route) },
                onNavigateToSkills = { navController.navigate(EYCDestination.SkillAssessment.route) },
                onNavigateToGuidance = { navController.navigate(EYCDestination.AICareerGuidance.route) },
                onNavigateToCareerMatches = { navController.navigate(EYCDestination.CareerMatches.route) },
                onNavigateToSkillGap = { navController.navigate(EYCDestination.SkillGap.route) },
                onNavigateToPathway = { navController.navigate(EYCDestination.LearningPathway.route) },
                onNavigateToProjects = { navController.navigate(EYCDestination.PracticalProjects.route) },
                onNavigateToReadinessReport = { navController.navigate(EYCDestination.ReadinessReport.route) }
            )
        }

        composable(EYCDestination.Profile.route) {
            StudentProfileScreen(
                name = "Alex Rivera",
                university = "Pacific Coast Institute of Technology",
                major = "Computer Science & HCI",
                gradYear = "Class of 2027",
                targetRole = "AI Application Engineer",
                bio = "Junior student passionate about modern Android, Jetpack Compose, and AI client architecture.",
                onNavigateBack = { navController.popBackStack() },
                onEditProfileClick = {},
                onViewReportClick = { navController.navigate(EYCDestination.ReadinessReport.route) }
            )
        }

        composable(EYCDestination.AptitudeAssessment.route) {
            AptitudeAssessmentScreen(
                questions = emptyList(),
                onCompleteAssessment = { navController.navigate(EYCDestination.CareerMatches.route) },
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.SkillAssessment.route) {
            SkillAssessmentScreen(
                skills = emptyList(),
                onSaveSkillRatings = { navController.popBackStack() },
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.AICareerGuidance.route) {
            AICareerGuidanceScreen(
                messages = emptyList(),
                onSendMessage = {},
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.CareerMatches.route) {
            CareerMatchScreen(
                careerMatches = emptyList(),
                onSelectCareer = {},
                onNavigateToPathway = { navController.navigate(EYCDestination.LearningPathway.route) },
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.SkillGap.route) {
            SkillGapScreen(
                targetRoleTitle = "AI Application Engineer",
                gapItems = emptyList(),
                onExplorePathway = { navController.navigate(EYCDestination.LearningPathway.route) },
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.LearningPathway.route) {
            LearningPathwayScreen(
                modules = emptyList(),
                onToggleTask = { _, _ -> },
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.PracticalProjects.route) {
            PracticalProjectsScreen(
                projects = emptyList(),
                onToggleMilestone = { _, _ -> },
                onSubmitProject = {},
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.CareerReadiness.route) {
            CareerReadinessScreen(
                overallScore = 78,
                targetRole = "AI Application Engineer",
                pillars = emptyList(),
                onTriggerReAssessment = { navController.navigate(EYCDestination.AptitudeAssessment.route) },
                onViewDetailedReport = { navController.navigate(EYCDestination.ReadinessReport.route) },
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.ReadinessReport.route) {
            CareerReadinessReportScreen(
                report = com.eyc.careerguidance.ui.screens.CareerReportSummaryUi(
                    studentName = "Alex Rivera",
                    institution = "Pacific Coast Institute of Technology",
                    targetRole = "AI Application Engineer",
                    overallReadinessScore = 78,
                    generatedDate = "October 2026",
                    verifiedStrengths = listOf("Jetpack Compose declarative UI", "Kotlin Coroutines"),
                    prioritizedGrowthAreas = listOf("Vector DB indexing", "Docker containerization"),
                    recommendedCertifications = listOf("Associate Android Developer", "Google Cloud Digital Leader")
                ),
                onExportPdfAction = {},
                onShareReportAction = {},
                onNavigateBack = { navController.popBackStack() }
            )
        }
    }
}
