package com.eyc.careerguidance.ui.navigation

sealed class EYCDestination(val route: String) {
    object Splash : EYCDestination("splash")
    object Login : EYCDestination("login")
    object Home : EYCDestination("home")
    object Profile : EYCDestination("profile")
    object AptitudeAssessment : EYCDestination("aptitude_assessment")
    object SkillAssessment : EYCDestination("skill_assessment")
    object AICareerGuidance : EYCDestination("ai_career_guidance")
    object CareerMatches : EYCDestination("career_matches")
    object SkillGap : EYCDestination("skill_gap")
    object LearningPathway : EYCDestination("learning_pathway")
    object PracticalProjects : EYCDestination("practical_projects")
    object CareerReadiness : EYCDestination("career_readiness")
    object ReadinessReport : EYCDestination("readiness_report")
}
