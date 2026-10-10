export interface KotlinFileEntry {
  id: string;
  name: string;
  path: string;
  category: 'Theme' | 'Components' | 'Screens' | 'Navigation' | 'Architecture' | 'Build';
  description: string;
  code: string;
}

export const KOTLIN_FILES: KotlinFileEntry[] = [
  {
    id: 'gradle_app',
    name: 'build.gradle.kts (Module: app)',
    path: 'app/build.gradle.kts',
    category: 'Build',
    description: 'Gradle configuration for Android module with Compose BOM, Material 3, Navigation, and Coroutines.',
    code: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
}

android {
    namespace = "com.eyc.careerguidance"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.eyc.careerguidance"
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
    }
}

dependencies {
    val composeBom = platform("androidx.compose:compose-bom:2024.12.01")
    implementation(composeBom)
    androidTestImplementation(composeBom)

    // Jetpack Compose & Material 3
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3:1.3.1")
    implementation("androidx.compose.material:material-icons-extended")

    // Navigation & Lifecycle
    implementation("androidx.navigation:navigation-compose:2.8.5")
    implementation("androidx.lifecycle:lifecycle-runtime-compose:2.8.7")
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")

    // Android Core & Coroutines
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.activity:activity-compose:1.9.3")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.9.0")

    // Debugging & Tooling
    debugImplementation("androidx.compose.ui:ui-tooling")
    debugImplementation("androidx.compose.ui:ui-test-manifest")
}
`,
  },
  {
    id: 'theme_color',
    name: 'Color.kt',
    path: 'com/eyc/careerguidance/ui/theme/Color.kt',
    category: 'Theme',
    description: 'Material 3 color palette for EYC with vibrant sapphire primary, deep surface tones, and accessible contrast.',
    code: `package com.eyc.careerguidance.ui.theme

import androidx.compose.ui.graphics.Color

// EYC Brand Sapphire / Professional Tech Palette
val EYCPrimaryLight = Color(0xFF0061A4)
val EYCOnPrimaryLight = Color(0xFFFFFFFF)
val EYCPrimaryContainerLight = Color(0xFFD1E4FF)
val EYCOnPrimaryContainerLight = Color(0xFF001D36)

val EYCSecondaryLight = Color(0xFF535F70)
val EYCOnSecondaryLight = Color(0xFFFFFFFF)
val EYCSecondaryContainerLight = Color(0xFFD7E3F7)
val EYCOnSecondaryContainerLight = Color(0xFF101C2B)

val EYCTertiaryLight = Color(0xFF6B5778)
val EYCOnTertiaryLight = Color(0xFFFFFFFF)
val EYCTertiaryContainerLight = Color(0xFFF2DAFF)
val EYCOnTertiaryContainerLight = Color(0xFF251432)

val EYCBackgroundLight = Color(0xFFFDFCFF)
val EYCOnBackgroundLight = Color(0xFF1A1C1E)
val EYCSurfaceLight = Color(0xFFFDFCFF)
val EYCOnSurfaceLight = Color(0xFF1A1C1E)
val EYCSurfaceVariantLight = Color(0xFFDFE2EB)
val EYCOnSurfaceVariantLight = Color(0xFF43474E)
val EYCOutlineLight = Color(0xFF73777F)
val EYCOutlineVariantLight = Color(0xFFC3C7D0)

// Dark Scheme
val EYCPrimaryDark = Color(0xFF9ECAFF)
val EYCOnPrimaryDark = Color(0xFF003258)
val EYCPrimaryContainerDark = Color(0xFF00497D)
val EYCOnPrimaryContainerDark = Color(0xFFD1E4FF)

val EYCSecondaryDark = Color(0xFFBBC7DB)
val EYCOnSecondaryDark = Color(0xFF253140)
val EYCSecondaryContainerDark = Color(0xFF3B4858)
val EYCOnSecondaryContainerDark = Color(0xFFD7E3F7)

val EYCTertiaryDark = Color(0xFFD6BEE4)
val EYCOnTertiaryDark = Color(0xFF3B2948)
val EYCTertiaryContainerDark = Color(0xFF523F5F)
val EYCOnTertiaryContainerDark = Color(0xFFF2DAFF)

val EYCBackgroundDark = Color(0xFF111418)
val EYCOnBackgroundDark = Color(0xFFE2E2E6)
val EYCSurfaceDark = Color(0xFF111418)
val EYCOnSurfaceDark = Color(0xFFE2E2E6)
val EYCSurfaceVariantDark = Color(0xFF43474E)
val EYCOnSurfaceVariantDark = Color(0xFFC3C7D0)
val EYCOutlineDark = Color(0xFF8D9199)
val EYCOutlineVariantDark = Color(0xFF43474E)

// Semantic Accents
val SuccessGreen = Color(0xFF2E7D32)
val WarningAmber = Color(0xFFED6C02)
val ErrorRed = Color(0xFFBA1A1A)
val MatchHighlight = Color(0xFF0B57D0)
`,
  },
  {
    id: 'theme_type',
    name: 'Type.kt',
    path: 'com/eyc/careerguidance/ui/theme/Type.kt',
    category: 'Theme',
    description: 'Material 3 typography hierarchy customized for student readability and clear career information scanning.',
    code: `package com.eyc.careerguidance.ui.theme

import androidx.compose.material3.Typography
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

val EYCTypography = Typography(
    headlineLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Bold,
        fontSize = 32.sp,
        lineHeight = 40.sp,
        letterSpacing = 0.sp
    ),
    headlineMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 28.sp,
        lineHeight = 36.sp,
        letterSpacing = 0.sp
    ),
    headlineSmall = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 24.sp,
        lineHeight = 32.sp,
        letterSpacing = 0.sp
    ),
    titleLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 20.sp,
        lineHeight = 26.sp,
        letterSpacing = 0.sp
    ),
    titleMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 16.sp,
        lineHeight = 24.sp,
        letterSpacing = 0.15.sp
    ),
    titleSmall = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 14.sp,
        lineHeight = 20.sp,
        letterSpacing = 0.1.sp
    ),
    bodyLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 16.sp,
        lineHeight = 24.sp,
        letterSpacing = 0.5.sp
    ),
    bodyMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 14.sp,
        lineHeight = 20.sp,
        letterSpacing = 0.25.sp
    ),
    bodySmall = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 12.sp,
        lineHeight = 16.sp,
        letterSpacing = 0.4.sp
    ),
    labelLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 14.sp,
        lineHeight = 20.sp,
        letterSpacing = 0.1.sp
    ),
    labelMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 12.sp,
        lineHeight = 16.sp,
        letterSpacing = 0.5.sp
    ),
    labelSmall = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 11.sp,
        lineHeight = 14.sp,
        letterSpacing = 0.5.sp
    )
)
`,
  },
  {
    id: 'theme_shape',
    name: 'Shape.kt',
    path: 'com/eyc/careerguidance/ui/theme/Shape.kt',
    category: 'Theme',
    description: 'Material 3 shape scale providing consistent rounded corners across cards, dialogs, and interactive controls.',
    code: `package com.eyc.careerguidance.ui.theme

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Shapes
import androidx.compose.ui.unit.dp

val EYCShapes = Shapes(
    extraSmall = RoundedCornerShape(8.dp),
    small = RoundedCornerShape(12.dp),
    medium = RoundedCornerShape(16.dp),
    large = RoundedCornerShape(24.dp),
    extraLarge = RoundedCornerShape(32.dp)
)
`,
  },
  {
    id: 'theme_theme',
    name: 'Theme.kt',
    path: 'com/eyc/careerguidance/ui/theme/Theme.kt',
    category: 'Theme',
    description: 'EYCCareerTheme supporting dynamic color on Android 12+ and seamless dark/light theme switching.',
    code: `package com.eyc.careerguidance.ui.theme

import android.app.Activity
import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val LightColorScheme = lightColorScheme(
    primary = EYCPrimaryLight,
    onPrimary = EYCOnPrimaryLight,
    primaryContainer = EYCPrimaryContainerLight,
    onPrimaryContainer = EYCOnPrimaryContainerLight,
    secondary = EYCSecondaryLight,
    onSecondary = EYCOnSecondaryLight,
    secondaryContainer = EYCSecondaryContainerLight,
    onSecondaryContainer = EYCOnSecondaryContainerLight,
    tertiary = EYCTertiaryLight,
    onTertiary = EYCOnTertiaryLight,
    tertiaryContainer = EYCTertiaryContainerLight,
    onTertiaryContainer = EYCOnTertiaryContainerLight,
    background = EYCBackgroundLight,
    onBackground = EYCOnBackgroundLight,
    surface = EYCSurfaceLight,
    onSurface = EYCOnSurfaceLight,
    surfaceVariant = EYCSurfaceVariantLight,
    onSurfaceVariant = EYCOnSurfaceVariantLight,
    outline = EYCOutlineLight,
    outlineVariant = EYCOutlineVariantLight
)

private val DarkColorScheme = darkColorScheme(
    primary = EYCPrimaryDark,
    onPrimary = EYCOnPrimaryDark,
    primaryContainer = EYCPrimaryContainerDark,
    onPrimaryContainer = EYCOnPrimaryContainerDark,
    secondary = EYCSecondaryDark,
    onSecondary = EYCOnSecondaryDark,
    secondaryContainer = EYCSecondaryContainerDark,
    onSecondaryContainer = EYCOnSecondaryContainerDark,
    tertiary = EYCTertiaryDark,
    onTertiary = EYCOnTertiaryDark,
    tertiaryContainer = EYCTertiaryContainerDark,
    onTertiaryContainer = EYCOnTertiaryContainerDark,
    background = EYCBackgroundDark,
    onBackground = EYCOnBackgroundDark,
    surface = EYCSurfaceDark,
    onSurface = EYCOnSurfaceDark,
    surfaceVariant = EYCSurfaceVariantDark,
    onSurfaceVariant = EYCOnSurfaceVariantDark,
    outline = EYCOutlineDark,
    outlineVariant = EYCOutlineVariantDark
)

@Composable
fun EYCCareerTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }
        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as? Activity)?.window
            if (window != null) {
                window.statusBarColor = colorScheme.surface.toArgb()
                WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = !darkTheme
            }
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = EYCTypography,
        shapes = EYCShapes,
        content = content
    )
}
`,
  },
  {
    id: 'comp_topbar',
    name: 'EYCTopAppBar.kt',
    path: 'com/eyc/careerguidance/ui/components/EYCTopAppBar.kt',
    category: 'Components',
    description: 'Reusable Material 3 TopAppBar with back navigation, titles, and optional actions.',
    code: `package com.eyc.careerguidance.ui.components

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.CenterAlignedTopAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextOverflow

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EYCTopAppBar(
    title: String,
    modifier: Modifier = Modifier,
    canNavigateBack: Boolean = false,
    onNavigateBack: () -> Unit = {},
    actions: @Composable () -> Unit = {}
) {
    CenterAlignedTopAppBar(
        title = {
            Text(
                text = title,
                style = MaterialTheme.typography.titleLarge,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        },
        navigationIcon = {
            if (canNavigateBack) {
                IconButton(onClick = onNavigateBack) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = "Navigate back"
                    )
                }
            }
        },
        actions = { actions() },
        colors = TopAppBarDefaults.centerAlignedTopAppBarColors(
            containerColor = MaterialTheme.colorScheme.surface,
            titleContentColor = MaterialTheme.colorScheme.onSurface,
            navigationIconContentColor = MaterialTheme.colorScheme.onSurface,
            actionIconContentColor = MaterialTheme.colorScheme.onSurfaceVariant
        ),
        modifier = modifier
    )
}
`,
  },
  {
    id: 'comp_bottombar',
    name: 'EYCBottomNavigationBar.kt',
    path: 'com/eyc/careerguidance/ui/components/EYCBottomNavigationBar.kt',
    category: 'Components',
    description: 'Material 3 NavigationBar with icons and labels for primary app destinations.',
    code: `package com.eyc.careerguidance.ui.components

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Assignment
import androidx.compose.material.icons.filled.Explore
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Timeline
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector

data class NavigationTab(
    val route: String,
    val title: String,
    val icon: ImageVector
)

val PrimaryNavTabs = listOf(
    NavigationTab("home", "Home", Icons.Default.Home),
    NavigationTab("assessments", "Assessments", Icons.Default.Assignment),
    NavigationTab("career_matches", "Careers", Icons.Default.Explore),
    NavigationTab("pathway", "Pathway", Icons.Default.Timeline),
    NavigationTab("profile", "Profile", Icons.Default.Person)
)

@Composable
fun EYCBottomNavigationBar(
    currentRoute: String,
    onTabSelected: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    NavigationBar(
        modifier = modifier,
        containerColor = MaterialTheme.colorScheme.surface,
        tonalElevation = MaterialTheme.colorScheme.surfaceTint.let { androidx.compose.ui.unit.dp.times(3) }
    ) {
        PrimaryNavTabs.forEach { tab ->
            val isSelected = currentRoute == tab.route
            NavigationBarItem(
                selected = isSelected,
                onClick = { onTabSelected(tab.route) },
                icon = {
                    Icon(
                        imageVector = tab.icon,
                        contentDescription = tab.title
                    )
                },
                label = {
                    Text(
                        text = tab.title,
                        style = MaterialTheme.typography.labelSmall
                    )
                },
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor = MaterialTheme.colorScheme.onPrimaryContainer,
                    indicatorColor = MaterialTheme.colorScheme.primaryContainer,
                    unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                    selectedTextColor = MaterialTheme.colorScheme.primary,
                    unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant
                )
            )
        }
    }
}
`,
  },
  {
    id: 'comp_circular_score',
    name: 'CircularScoreIndicator.kt',
    path: 'com/eyc/careerguidance/ui/components/CircularScoreIndicator.kt',
    category: 'Components',
    description: 'Custom Canvas circular readiness indicator with smooth percentage arc, inner score, and label.',
    code: `package com.eyc.careerguidance.ui.components

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.size
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

@Composable
fun CircularScoreIndicator(
    score: Int,
    maxScore: Int = 100,
    modifier: Modifier = Modifier,
    size: Dp = 120.dp,
    strokeWidth: Dp = 10.dp,
    primaryColor: Color = MaterialTheme.colorScheme.primary,
    trackColor: Color = MaterialTheme.colorScheme.surfaceVariant,
    label: String = "Readiness"
) {
    val animatedProgress = remember { Animatable(0f) }

    LaunchedEffect(score) {
        animatedProgress.animateTo(
            targetValue = (score.toFloat() / maxScore).coerceIn(0f, 1f),
            animationSpec = tween(durationMillis = 1000, easing = FastOutSlowInEasing)
        )
    }

    Box(
        contentAlignment = Alignment.Center,
        modifier = modifier.size(size)
    ) {
        Canvas(modifier = Modifier.size(size)) {
            // Draw background track
            drawCircle(
                color = trackColor,
                radius = (size.toPx() - strokeWidth.toPx()) / 2f,
                style = Stroke(width = strokeWidth.toPx())
            )
            // Draw active progress arc
            drawArc(
                color = primaryColor,
                startAngle = -90f,
                sweepAngle = animatedProgress.value * 360f,
                useCenter = false,
                style = Stroke(
                    width = strokeWidth.toPx(),
                    cap = StrokeCap.Round
                )
            )
        }

        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                text = "$score%",
                style = MaterialTheme.typography.headlineMedium,
                color = MaterialTheme.colorScheme.onSurface
            )
            Text(
                text = label,
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}
`,
  },
  {
    id: 'comp_skill_comparison',
    name: 'SkillComparisonBar.kt',
    path: 'com/eyc/careerguidance/ui/components/SkillComparisonBar.kt',
    category: 'Components',
    description: 'Visual side-by-side comparison bar for student current proficiency vs industry role requirement.',
    code: `package com.eyc.careerguidance.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun SkillComparisonBar(
    skillName: String,
    currentScore: Int,
    requiredScore: Int,
    statusText: String,
    modifier: Modifier = Modifier
) {
    val barColor = when {
        currentScore >= requiredScore -> MaterialTheme.colorScheme.primary
        currentScore >= requiredScore - 20 -> MaterialTheme.colorScheme.tertiary
        else -> MaterialTheme.colorScheme.error
    }

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = skillName,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurface
            )
            Text(
                text = statusText,
                style = MaterialTheme.typography.labelSmall,
                color = barColor
            )
        }

        Spacer(modifier = Modifier.height(6.dp))

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(8.dp)
                .clip(RoundedCornerShape(4.dp))
                .background(MaterialTheme.colorScheme.surfaceVariant)
        ) {
            // Target marker line or background
            Box(
                modifier = Modifier
                    .fillMaxWidth(fraction = (requiredScore / 100f).coerceIn(0f, 1f))
                    .height(8.dp)
                    .background(MaterialTheme.colorScheme.outlineVariant)
            )
            // Current progress
            Box(
                modifier = Modifier
                    .fillMaxWidth(fraction = (currentScore / 100f).coerceIn(0f, 1f))
                    .height(8.dp)
                    .clip(RoundedCornerShape(4.dp))
                    .background(barColor)
            )
        }

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 4.dp),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = "Current: $currentScore%",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Text(
                text = "Required: $requiredScore%",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}
`,
  },
  {
    id: 'comp_state_containers',
    name: 'StateContainers.kt',
    path: 'com/eyc/careerguidance/ui/components/StateContainers.kt',
    category: 'Components',
    description: 'Reusable Loading, Empty, and Error state composables with Material 3 styling and retry actions.',
    code: `package com.eyc.careerguidance.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ErrorOutline
import androidx.compose.material.icons.filled.Inbox
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp

@Composable
fun LoadingStateContent(
    modifier: Modifier = Modifier,
    message: String = "Analyzing student profile and career data..."
) {
    Box(
        modifier = modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.padding(24.dp)
        ) {
            CircularProgressIndicator(
                modifier = Modifier.size(48.dp),
                color = MaterialTheme.colorScheme.primary
            )
            Spacer(modifier = Modifier.height(16.dp))
            Text(
                text = message,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )
        }
    }
}

@Composable
fun EmptyStateContent(
    title: String,
    description: String,
    actionLabel: String? = null,
    onActionClick: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.padding(32.dp)
        ) {
            Icon(
                imageVector = Icons.Default.Inbox,
                contentDescription = null,
                modifier = Modifier.size(64.dp),
                tint = MaterialTheme.colorScheme.outline
            )
            Spacer(modifier = Modifier.height(16.dp))
            Text(
                text = title,
                style = MaterialTheme.typography.titleLarge,
                color = MaterialTheme.colorScheme.onSurface,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = description,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )
            if (actionLabel != null) {
                Spacer(modifier = Modifier.height(24.dp))
                Button(onClick = onActionClick) {
                    Text(text = actionLabel)
                }
            }
        }
    }
}

@Composable
fun ErrorStateContent(
    errorMessage: String,
    onRetry: () -> Unit,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.padding(32.dp)
        ) {
            Icon(
                imageVector = Icons.Default.ErrorOutline,
                contentDescription = null,
                modifier = Modifier.size(64.dp),
                tint = MaterialTheme.colorScheme.error
            )
            Spacer(modifier = Modifier.height(16.dp))
            Text(
                text = "Something went wrong",
                style = MaterialTheme.typography.titleLarge,
                color = MaterialTheme.colorScheme.onSurface,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = errorMessage,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(24.dp))
            Button(onClick = onRetry) {
                Text(text = "Try Again")
            }
        }
    }
}
`,
  },
  {
    id: 'screen_splash',
    name: 'SplashScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/SplashScreen.kt',
    category: 'Screens',
    description: 'Splash Screen featuring EYC App Logo, App Name, and a cheerful animated cartoon mascot waving "Hello Dear Students!" with transition to Login.',
    code: `package com.eyc.careerguidance.ui.screens

import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForward
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material.icons.filled.School
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay

@Composable
fun SplashScreen(
    onNavigateToLogin: () -> Unit,
    modifier: Modifier = Modifier
) {
    var isWaving by remember { mutableStateOf(true) }

    val infiniteTransition = rememberInfiniteTransition(label = "wave")
    val waveAngle by infiniteTransition.animateFloat(
        initialValue = -25f,
        targetValue = 15f,
        animationSpec = infiniteRepeatable(
            animation = tween(650, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "waveAngle"
    )

    LaunchedEffect(Unit) {
        delay(4000)
        onNavigateToLogin()
    }

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(
                Brush.verticalGradient(
                    colors = listOf(
                        MaterialTheme.colorScheme.primary.copy(alpha = 0.12f),
                        MaterialTheme.colorScheme.surface
                    )
                )
            )
            .padding(24.dp)
    ) {
        Column(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            // EYC Logo & App Title
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.padding(top = 28.dp)
            ) {
                Surface(
                    shape = RoundedCornerShape(20.dp),
                    color = Color(0xFF059669),
                    modifier = Modifier.size(68.dp)
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Text(text = "SIS", fontWeight = FontWeight.Black, color = Color.White, fontSize = 24.sp)
                    }
                }

                Spacer(modifier = Modifier.height(14.dp))
                Text(
                    text = "SIS — Smart Intelligence Students",
                    style = MaterialTheme.typography.headlineSmall,
                    fontWeight = FontWeight.Black
                )
            }

            // Tree & Monkey Animation ("Hi there students")
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.fillMaxWidth().clickable { isWaving = !isWaving }
            ) {
                Surface(
                    shape = RoundedCornerShape(20.dp),
                    color = Color.White,
                    shadowElevation = 8.dp
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.padding(horizontal = 16.dp, vertical = 10.dp)
                    ) {
                        Text(text = "👋", fontSize = 18.sp)
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = "Hi there students",
                            color = Color(0xFF1B5E20),
                            fontWeight = FontWeight.Bold,
                            fontSize = 14.sp
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Monkey descending from lush tree branches holding vine
                Box(
                    contentAlignment = Alignment.Center,
                    modifier = Modifier.size(130.dp)
                ) {
                    // Head
                    Box(
                        contentAlignment = Alignment.Center,
                        modifier = Modifier
                            .size(96.dp)
                            .clip(CircleShape)
                            .background(Color(0xFFFED7AA))
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Row(
                                horizontalArrangement = Arrangement.spacedBy(20.dp),
                                modifier = Modifier.padding(top = 10.dp)
                            ) {
                                Box(modifier = Modifier.size(12.dp).clip(CircleShape).background(Color(0xFF0F172A)))
                                Box(modifier = Modifier.size(12.dp).clip(CircleShape).background(Color(0xFF0F172A)))
                            }
                            Spacer(modifier = Modifier.height(10.dp))
                            Text(text = "‿", fontSize = 28.sp, fontWeight = FontWeight.Bold, color = Color(0xFFBE123C))
                        }
                    }

                    // Graduation Cap
                    Box(modifier = Modifier.align(Alignment.TopCenter).offset(y = (-6).dp)) {
                        Icon(Icons.Default.School, contentDescription = null, tint = Color(0xFF1E1B4B), modifier = Modifier.size(46.dp))
                    }

                    // Waving Hand
                    Box(
                        modifier = Modifier
                            .align(Alignment.TopEnd)
                            .offset(x = 10.dp, y = 18.dp)
                            .rotate(if (isWaving) waveAngle else 0f)
                    ) {
                        Surface(shape = CircleShape, color = Color(0xFFFED7AA), modifier = Modifier.size(34.dp)) {
                            Box(contentAlignment = Alignment.Center) {
                                Text("✋", fontSize = 18.sp)
                            }
                        }
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))
                Text(
                    text = "Neo — तुमचा स्मार्ट करिअर मित्र",
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.primary,
                    fontSize = 13.sp
                )
            }

            // Bottom CTA: Get Started
            Button(
                onClick = onNavigateToLogin,
                shape = RoundedCornerShape(18.dp),
                modifier = Modifier.fillMaxWidth().height(52.dp)
            ) {
                Text("सुरू करा (Get Started) ➔", fontWeight = FontWeight.Bold, fontSize = 15.sp)
            }
        }
    }
}
`,
  },
  {
    id: 'screen_login',
    name: 'LoginScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/LoginScreen.kt',
    category: 'Screens',
    description: 'Login screen for student authentication via Mobile Number with OTP verification or Google / Gmail accounts.',
    code: `package com.eyc.careerguidance.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun LoginScreen(
    onLoginSuccess: (studentName: String, contact: String, method: String) -> Unit,
    onExploreAsGuest: () -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedTab by remember { mutableStateOf(0) }
    var phoneNumber by remember { mutableStateOf("9876543210") }
    var otpSent by remember { mutableStateOf(false) }
    var otpValue by remember { mutableStateOf("4821") }
    var emailAddress by remember { mutableStateOf("student@engineering.edu") }

    Column(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
            .verticalScroll(rememberScrollState())
            .padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.fillMaxWidth()
        ) {
            Spacer(modifier = Modifier.height(24.dp))
            Surface(
                shape = RoundedCornerShape(20.dp),
                color = Color(0xFF059669),
                modifier = Modifier.size(68.dp)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Text(text = "SIS", fontWeight = FontWeight.Black, color = Color.White, fontSize = 24.sp)
                }
            }
            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = "SIS",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.Black
            )
            Text(
                text = "SMART INTELLIGENCE STUDENTS",
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF059669),
                letterSpacing = 1.sp
            )
            Spacer(modifier = Modifier.height(20.dp))

            // Method Picker
            Card(
                shape = RoundedCornerShape(24.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)),
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(modifier = Modifier.fillMaxWidth().padding(4.dp)) {
                    Button(
                        onClick = { selectedTab = 0 },
                        colors = ButtonDefaults.buttonColors(
                            containerColor = if (selectedTab == 0) MaterialTheme.colorScheme.primary else Color.Transparent,
                            contentColor = if (selectedTab == 0) MaterialTheme.colorScheme.onPrimary else MaterialTheme.colorScheme.onSurfaceVariant
                        ),
                        shape = RoundedCornerShape(20.dp),
                        modifier = Modifier.weight(1f)
                    ) {
                        Text("फोन नंबर (OTP)", fontSize = 12.sp, fontWeight = FontWeight.Bold)
                    }
                    Button(
                        onClick = { selectedTab = 1 },
                        colors = ButtonDefaults.buttonColors(
                            containerColor = if (selectedTab == 1) MaterialTheme.colorScheme.primary else Color.Transparent,
                            contentColor = if (selectedTab == 1) MaterialTheme.colorScheme.onPrimary else MaterialTheme.colorScheme.onSurfaceVariant
                        ),
                        shape = RoundedCornerShape(20.dp),
                        modifier = Modifier.weight(1f)
                    ) {
                        Text("गुगल / Gmail", fontSize = 12.sp, fontWeight = FontWeight.Bold)
                    }
                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            if (selectedTab == 0) {
                Card(
                    shape = RoundedCornerShape(28.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Column(modifier = Modifier.padding(20.dp)) {
                        Text("मोबाईल नंबर प्रविष्ट करा", style = MaterialTheme.typography.labelMedium, fontWeight = FontWeight.Bold)
                        Spacer(modifier = Modifier.height(8.dp))
                        OutlinedTextField(
                            value = phoneNumber,
                            onValueChange = { phoneNumber = it },
                            placeholder = { Text("9876543210") },
                            leadingIcon = { Text("🇮🇳 +91 ", fontWeight = FontWeight.Bold, modifier = Modifier.padding(start = 12.dp)) },
                            singleLine = true,
                            shape = RoundedCornerShape(16.dp),
                            modifier = Modifier.fillMaxWidth()
                        )
                        AnimatedVisibility(visible = otpSent) {
                            Column(modifier = Modifier.padding(top = 16.dp)) {
                                Text("OTP प्रविष्ट करा (4821):", style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.primary)
                                OutlinedTextField(
                                    value = otpValue,
                                    onValueChange = { otpValue = it },
                                    shape = RoundedCornerShape(16.dp),
                                    modifier = Modifier.fillMaxWidth()
                                )
                            }
                        }
                        Spacer(modifier = Modifier.height(20.dp))
                        Button(
                            onClick = {
                                if (!otpSent) otpSent = true
                                else onLoginSuccess("अथर्व पाटील", "+91 $phoneNumber", "phone")
                            },
                            shape = RoundedCornerShape(16.dp),
                            modifier = Modifier.fillMaxWidth().height(50.dp)
                        ) {
                            Text(if (!otpSent) "OTP मिळवा (Send OTP)" else "लॉगिन करा व पुढे जा", fontWeight = FontWeight.Bold)
                        }
                    }
                }
            } else {
                Card(
                    shape = RoundedCornerShape(28.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Column(modifier = Modifier.padding(20.dp)) {
                        Text("ईमेल पत्ता", style = MaterialTheme.typography.labelMedium, fontWeight = FontWeight.Bold)
                        Spacer(modifier = Modifier.height(8.dp))
                        OutlinedTextField(
                            value = emailAddress,
                            onValueChange = { emailAddress = it },
                            shape = RoundedCornerShape(16.dp),
                            modifier = Modifier.fillMaxWidth()
                        )
                        Spacer(modifier = Modifier.height(20.dp))
                        Button(
                            onClick = { onLoginSuccess("अथर्व पाटील", emailAddress, "gmail") },
                            shape = RoundedCornerShape(16.dp),
                            modifier = Modifier.fillMaxWidth().height(50.dp)
                        ) {
                            Icon(Icons.Default.AccountCircle, contentDescription = null)
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("Google / Gmail ने साइन इन करा", fontWeight = FontWeight.Bold)
                        }
                    }
                }
            }
            TextButton(onClick = onExploreAsGuest, modifier = Modifier.padding(top = 12.dp)) {
                Text("किंवा चाचणीसाठी थेट प्रवेश करा (Guest Demo) ➔", fontWeight = FontWeight.Bold)
            }
        }
    }
}
`,
  },
  {
    id: 'screen_home',
    name: 'HomeScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/HomeScreen.kt',
    category: 'Screens',
    description: 'Dashboard screen displaying student readiness, top career match, quick action cards, and milestone progress.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.AssignmentTurnedIn
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material.icons.filled.Explore
import androidx.compose.material.icons.filled.Lightbulb
import androidx.compose.material.icons.filled.Psychology
import androidx.compose.material.icons.filled.Timeline
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedCard
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.CircularScoreIndicator
import com.eyc.careerguidance.ui.components.EYCTopAppBar

@Composable
fun HomeScreen(
    studentName: String,
    targetRole: String,
    readinessScore: Int,
    onNavigateToProfile: () -> Unit,
    onNavigateToAptitude: () -> Unit,
    onNavigateToSkills: () -> Unit,
    onNavigateToGuidance: () -> Unit,
    onNavigateToCareerMatches: () -> Unit,
    onNavigateToSkillGap: () -> Unit,
    onNavigateToPathway: () -> Unit,
    onNavigateToProjects: () -> Unit,
    onNavigateToReadinessReport: () -> Unit,
    modifier: Modifier = Modifier
) {
    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "EYC Elevate Your Career",
                canNavigateBack = false
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
            // Welcome Header
            item {
                Column {
                    Text(
                        text = "Welcome back, $studentName",
                        style = MaterialTheme.typography.headlineSmall,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "Target Path: $targetRole",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.primary
                    )
                }
            }

            // Readiness Summary Card
            item {
                ElevatedCard(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable { onNavigateToReadinessReport() },
                    shape = MaterialTheme.shapes.large,
                    colors = CardDefaults.elevatedCardColors(
                        containerColor = MaterialTheme.colorScheme.surface
                    )
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(20.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = "Career Readiness Index",
                                style = MaterialTheme.typography.titleMedium,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = "Based on verified assessments, project evidence, and skill benchmarking.",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                            Spacer(modifier = Modifier.height(12.dp))
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text(
                                    text = "View Readiness Report",
                                    style = MaterialTheme.typography.labelMedium,
                                    color = MaterialTheme.colorScheme.primary
                                )
                                Icon(
                                    imageVector = Icons.AutoMirrored.Filled.ArrowForward,
                                    contentDescription = null,
                                    modifier = Modifier.size(16.dp),
                                    tint = MaterialTheme.colorScheme.primary
                                )
                            }
                        }
                        CircularScoreIndicator(
                            score = readinessScore,
                            size = 96.dp,
                            strokeWidth = 8.dp
                        )
                    }
                }
            }

            // Quick Assessment & Exploration Grid
            item {
                Text(
                    text = "Core Guidance Tools",
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.onSurface
                )
            }

            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    HomeActionCard(
                        title = "Aptitude Test",
                        subtitle = "6 RIASEC modules",
                        icon = Icons.Default.Psychology,
                        onClick = onNavigateToAptitude,
                        modifier = Modifier.weight(1f)
                    )
                    HomeActionCard(
                        title = "Skill Audit",
                        subtitle = "Evaluate proficiencies",
                        icon = Icons.Default.AssignmentTurnedIn,
                        onClick = onNavigateToSkills,
                        modifier = Modifier.weight(1f)
                    )
                }
            }

            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    HomeActionCard(
                        title = "AI Career Advisor",
                        subtitle = "Personalized advice",
                        icon = Icons.Default.AutoAwesome,
                        onClick = onNavigateToGuidance,
                        modifier = Modifier.weight(1f)
                    )
                    HomeActionCard(
                        title = "Career Matches",
                        subtitle = "Top suited roles",
                        icon = Icons.Default.Explore,
                        onClick = onNavigateToCareerMatches,
                        modifier = Modifier.weight(1f)
                    )
                }
            }

            // Next Steps Strip
            item {
                Text(
                    text = "Execution & Progress",
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.onSurface
                )
            }

            item {
                OutlinedCard(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable { onNavigateToSkillGap() },
                    shape = MaterialTheme.shapes.medium
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.Lightbulb,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.tertiary,
                            modifier = Modifier.size(32.dp)
                        )
                        Column(
                            modifier = Modifier
                                .weight(1f)
                                .padding(horizontal = 12.dp)
                        ) {
                            Text(
                                text = "Skill Gap Identification",
                                style = MaterialTheme.typography.titleSmall,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Text(
                                text = "2 critical gaps identified for Cloud & Vector indexing",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowForward,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            item {
                OutlinedCard(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable { onNavigateToPathway() },
                    shape = MaterialTheme.shapes.medium
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.Timeline,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.primary,
                            modifier = Modifier.size(32.dp)
                        )
                        Column(
                            modifier = Modifier
                                .weight(1f)
                                .padding(horizontal = 12.dp)
                        ) {
                            Text(
                                text = "Learning-to-Career Pathway",
                                style = MaterialTheme.typography.titleSmall,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            Text(
                                text = "Phase 3 in progress (8 of 15 milestones complete)",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowForward,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun HomeActionCard(
    title: String,
    subtitle: String,
    icon: ImageVector,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.clickable { onClick() },
        shape = MaterialTheme.shapes.medium,
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
        )
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.primary,
                modifier = Modifier.size(28.dp)
            )
            Spacer(modifier = Modifier.height(10.dp))
            Text(
                text = title,
                style = MaterialTheme.typography.titleSmall,
                color = MaterialTheme.colorScheme.onSurface
            )
            Spacer(modifier = Modifier.height(2.dp))
            Text(
                text = subtitle,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}
`,
  },
  {
    id: 'screen_profile',
    name: 'StudentProfileScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/StudentProfileScreen.kt',
    category: 'Screens',
    description: 'Student profile view with academic credentials, target career aspiration, verified badges, and portfolio links.',
    code: `package com.eyc.careerguidance.ui.screens

import androidx.compose.foundation.background
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
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.School
import androidx.compose.material.icons.filled.VerifiedUser
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.DividerDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar

@Composable
fun StudentProfileScreen(
    name: String,
    university: String,
    major: String,
    gradYear: String,
    targetRole: String,
    bio: String,
    onNavigateBack: () -> Unit,
    onEditProfileClick: () -> Unit,
    onViewReportClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Student Profile",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack,
                actions = {
                    IconButton(onClick = onEditProfileClick) {
                        Icon(
                            imageVector = Icons.Default.Edit,
                            contentDescription = "Edit Profile"
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
            // Profile Card
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
                        // Avatar Circle
                        Box(
                            modifier = Modifier
                                .size(88.dp)
                                .clip(CircleShape)
                                .background(MaterialTheme.colorScheme.primaryContainer),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = name.take(2).uppercase(),
                                style = MaterialTheme.typography.headlineMedium,
                                color = MaterialTheme.colorScheme.onPrimaryContainer,
                                fontWeight = FontWeight.Bold
                            )
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        Text(
                            text = name,
                            style = MaterialTheme.typography.titleLarge,
                            color = MaterialTheme.colorScheme.onSurface
                        )

                        Text(
                            text = targetRole,
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.primary
                        )

                        Spacer(modifier = Modifier.height(8.dp))

                        Text(
                            text = bio,
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            // Academic Details
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(
                                imageVector = Icons.Default.School,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.primary
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(
                                text = "Academic Credentials",
                                style = MaterialTheme.typography.titleMedium,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        ProfileInfoRow(label = "Institution", value = university)
                        HorizontalDivider(color = DividerDefaults.color.copy(alpha = 0.3f))
                        ProfileInfoRow(label = "Field of Study", value = major)
                        HorizontalDivider(color = DividerDefaults.color.copy(alpha = 0.3f))
                        ProfileInfoRow(label = "Graduation", value = gradYear)
                    }
                }
            }

            // Career Goal Card
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(
                                imageVector = Icons.Default.VerifiedUser,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.tertiary
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(
                                text = "Target Career Aspiration",
                                style = MaterialTheme.typography.titleMedium,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                        }

                        Spacer(modifier = Modifier.height(8.dp))

                        Text(
                            text = targetRole,
                            style = MaterialTheme.typography.headlineSmall,
                            color = MaterialTheme.colorScheme.primary
                        )

                        Spacer(modifier = Modifier.height(4.dp))

                        Text(
                            text = "Assessed match confidence: 94%. Learning pathway is customized to bridge cloud deployments and vector database gaps.",
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            // Actions
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Button(
                        onClick = onViewReportClick,
                        modifier = Modifier.weight(1f)
                    ) {
                        Text(text = "View Readiness Report")
                    }
                    OutlinedButton(
                        onClick = onEditProfileClick,
                        modifier = Modifier.weight(1f)
                    ) {
                        Text(text = "Edit Preferences")
                    }
                }
            }
        }
    }
}

@Composable
fun ProfileInfoRow(label: String, value: String) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 10.dp),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
            text = value,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurface
        )
    }
}
`,
  },
  {
    id: 'screen_aptitude',
    name: 'AptitudeAssessmentScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/AptitudeAssessmentScreen.kt',
    category: 'Screens',
    description: 'Interest and Aptitude assessment with RIASEC categories, stepped progress, question radio choices, and score evaluation.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
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
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar

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

@Composable
fun AptitudeAssessmentScreen(
    questions: List<AptitudeQuestionUi>,
    onCompleteAssessment: (Map<String, Int>) -> Unit,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    var currentQuestionIndex by remember { mutableIntStateOf(0) }
    val selectedAnswers = remember { mutableStateMapOf<String, Int>() }

    val currentQuestion = questions.getOrNull(currentQuestionIndex)
    val progress = if (questions.isNotEmpty()) {
        (currentQuestionIndex + 1).toFloat() / questions.size
    } else 0f

    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Aptitude Assessment",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack
            )
        },
        modifier = modifier
    ) { innerPadding ->
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
                            text = "Question \${currentQuestionIndex + 1} of \${questions.size}",
                            style = MaterialTheme.typography.labelMedium,
                            color = MaterialTheme.colorScheme.primary
                        )
                        Text(
                            text = "Pillar: \${currentQuestion.category}",
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
                                onCompleteAssessment(selectedAnswers)
                            }
                        },
                        enabled = selectedAnswers.containsKey(currentQuestion.id),
                        modifier = Modifier.weight(1f)
                    ) {
                        Text(
                            text = if (currentQuestionIndex < questions.size - 1) "Next" else "Submit Assessment"
                        )
                    }
                }
            }
        }
    }
}
`,
  },
  {
    id: 'screen_skills',
    name: 'SkillAssessmentScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/SkillAssessmentScreen.kt',
    category: 'Screens',
    description: 'Technical and soft skill assessment screen with 5-point proficiency sliders, category filters, and verification indicators.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.FilterChip
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Slider
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
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar

data class SkillAuditItemUi(
    val id: String,
    val name: String,
    val category: String,
    val currentLevel: Int,
    val targetLevel: Int,
    val isVerified: Boolean
)

@Composable
fun SkillAssessmentScreen(
    skills: List<SkillAuditItemUi>,
    onSaveSkillRatings: (Map<String, Int>) -> Unit,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedCategory by remember { mutableStateOf("All") }
    val ratings = remember {
        mutableStateMapOf<String, Int>().apply {
            skills.forEach { put(it.id, it.currentLevel) }
        }
    }

    val categories = listOf("All", "Technical", "Soft Skills", "Domain & Tools")
    val filteredSkills = if (selectedCategory == "All") {
        skills
    } else {
        skills.filter { it.category == selectedCategory }
    }

    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Skill Audit",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack
            )
        },
        bottomBar = {
            Button(
                onClick = { onSaveSkillRatings(ratings) },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp)
            ) {
                Text(text = "Save Skill Assessment")
            }
        },
        modifier = modifier
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            item {
                Text(
                    text = "Self-Rate Your Proficiency",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Text(
                    text = "Rate your current capability from 1 (Novice) to 5 (Mastery).",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            // Category Chips
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    categories.forEach { cat ->
                        FilterChip(
                            selected = selectedCategory == cat,
                            onClick = { selectedCategory = cat },
                            label = { Text(cat) }
                        )
                    }
                }
            }

            // Skill items list
            items(filteredSkills) { skill ->
                val currentLevel = ratings[skill.id] ?: skill.currentLevel
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
                                text = skill.name,
                                style = MaterialTheme.typography.titleSmall,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                            if (skill.isVerified) {
                                Row(verticalAlignment = Alignment.CenterVertically) {
                                    Icon(
                                        imageVector = Icons.Default.CheckCircle,
                                        contentDescription = "Verified by project evidence",
                                        tint = MaterialTheme.colorScheme.primary,
                                        modifier = Modifier.padding(end = 4.dp)
                                    )
                                    Text(
                                        text = "Verified",
                                        style = MaterialTheme.typography.labelSmall,
                                        color = MaterialTheme.colorScheme.primary
                                    )
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(8.dp))

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text(
                                text = "Level \$currentLevel of 5 (\${getLevelLabel(currentLevel)})",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                            Text(
                                text = "Target: Level \${skill.targetLevel}",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.primary
                            )
                        }

                        Slider(
                            value = currentLevel.toFloat(),
                            onValueChange = { ratings[skill.id] = it.toInt() },
                            valueRange = 1f..5f,
                            steps = 3,
                            modifier = Modifier.fillMaxWidth()
                        )
                    }
                }
            }
        }
    }
}

private fun getLevelLabel(level: Int): String = when (level) {
    1 -> "Beginner"
    2 -> "Developing"
    3 -> "Proficient"
    4 -> "Advanced"
    else -> "Expert"
}
`,
  },
  {
    id: 'screen_guidance',
    name: 'AICareerGuidanceScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/AICareerGuidanceScreen.kt',
    category: 'Screens',
    description: 'AI Career Guidance advisor interface with contextual suggestions, chat bubbles, and actionable guidance cards.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.Send
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar

data class GuidanceMessageUi(
    val id: String,
    val sender: String, // "ai" or "user"
    val text: String,
    val timestamp: String,
    val suggestedFollowUps: List<String> = emptyList()
)

@Composable
fun AICareerGuidanceScreen(
    messages: List<GuidanceMessageUi>,
    onSendMessage: (String) -> Unit,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    var inputText by remember { mutableStateOf("") }

    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "AI Career Advisor",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack
            )
        },
        bottomBar = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(MaterialTheme.colorScheme.surface)
                    .padding(12.dp)
            ) {
                // Quick prompt chips
                val latestAiMessage = messages.lastOrNull { it.sender == "ai" }
                if (latestAiMessage != null && latestAiMessage.suggestedFollowUps.isNotEmpty()) {
                    LazyRow(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.padding(bottom = 8.dp)
                    ) {
                        items(latestAiMessage.suggestedFollowUps) { prompt ->
                            Card(
                                shape = MaterialTheme.shapes.small,
                                colors = CardDefaults.cardColors(
                                    containerColor = MaterialTheme.colorScheme.surfaceVariant
                                ),
                                modifier = Modifier.clickable {
                                    onSendMessage(prompt)
                                }
                            ) {
                                Text(
                                    text = prompt,
                                    style = MaterialTheme.typography.labelSmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp)
                                )
                            }
                        }
                    }
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    OutlinedTextField(
                        value = inputText,
                        onValueChange = { inputText = it },
                        placeholder = { Text("Ask about roles, skills, or projects...") },
                        modifier = Modifier.weight(1f),
                        shape = MaterialTheme.shapes.large,
                        singleLine = true
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    IconButton(
                        onClick = {
                            if (inputText.isNotBlank()) {
                                onSendMessage(inputText)
                                inputText = ""
                            }
                        },
                        enabled = inputText.isNotBlank()
                    ) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.Send,
                            contentDescription = "Send Message",
                            tint = if (inputText.isNotBlank()) {
                                MaterialTheme.colorScheme.primary
                            } else {
                                MaterialTheme.colorScheme.onSurfaceVariant
                            }
                        )
                    }
                }
            }
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
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium,
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                    )
                ) {
                    Row(
                        modifier = Modifier.padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.AutoAwesome,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.primary
                        )
                        Spacer(modifier = Modifier.width(12.dp))
                        Text(
                            text = "Guidance grounded in your aptitude profile and completed milestones.",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onPrimaryContainer
                        )
                    }
                }
            }

            items(messages) { message ->
                val isAi = message.sender == "ai"
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = if (isAi) Arrangement.Start else Arrangement.End
                ) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth(0.85f)
                            .clip(
                                RoundedCornerShape(
                                    topStart = 16.dp,
                                    topEnd = 16.dp,
                                    bottomStart = if (isAi) 4.dp else 16.dp,
                                    bottomEnd = if (isAi) 16.dp else 4.dp
                                )
                            )
                            .background(
                                if (isAi) MaterialTheme.colorScheme.surfaceVariant
                                else MaterialTheme.colorScheme.primary
                            )
                            .padding(16.dp)
                    ) {
                        Column {
                            Text(
                                text = message.text,
                                style = MaterialTheme.typography.bodyMedium,
                                color = if (isAi) MaterialTheme.colorScheme.onSurfaceVariant
                                else MaterialTheme.colorScheme.onPrimary
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = message.timestamp,
                                style = MaterialTheme.typography.labelSmall,
                                color = if (isAi) MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.7f)
                                else MaterialTheme.colorScheme.onPrimary.copy(alpha = 0.7f),
                                modifier = Modifier.align(Alignment.End)
                            )
                        }
                    }
                }
            }
        }
    }
}
`,
  },
  {
    id: 'screen_careermatch',
    name: 'CareerMatchScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/CareerMatchScreen.kt',
    category: 'Screens',
    description: 'Career Match and Detailed Explanation: breakdown percentages, why it fits you, day in the life, and pathways.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.material.icons.filled.TrendingUp
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
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
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.CircularScoreIndicator
import com.eyc.careerguidance.ui.components.EYCTopAppBar

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
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedCareerId by remember {
        mutableStateOf(careerMatches.firstOrNull()?.id.orEmpty())
    }

    val selectedCareer = careerMatches.find { it.id == selectedCareerId } ?: careerMatches.firstOrNull()

    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Career Matches & Explanation",
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
                    text = "Discovered Career Trajectories",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Text(
                    text = "Ranked by your aptitude tests, skill audit, and interest profiles.",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
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
                                    text = "\${match.overallMatch}%",
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

            if (selectedCareer != null) {
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
                    Button(
                        onClick = { onNavigateToPathway(selectedCareer.id) },
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(text = "View Learning Pathway for \${selectedCareer.title}")
                    }
                }
            }
        }
    }
}
`,
  },
  {
    id: 'screen_skillgap',
    name: 'SkillGapScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/SkillGapScreen.kt',
    category: 'Screens',
    description: 'Skill-Gap Identification screen: compare student mastery vs job requirements and view bridge recommendations.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.material.icons.filled.WarningAmber
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar
import com.eyc.careerguidance.ui.components.SkillComparisonBar

data class SkillGapItemUi(
    val skillName: String,
    val currentScore: Int,
    val requiredScore: Int,
    val status: String,
    val recommendation: String
)

@Composable
fun SkillGapScreen(
    targetRoleTitle: String,
    gapItems: List<SkillGapItemUi>,
    onExplorePathway: () -> Unit,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Skill-Gap Analysis",
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
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium,
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                    )
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(
                            text = "Target Role: $targetRoleTitle",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.primary
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "Identified gaps represent competencies with the highest impact on hiring readiness.",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            item {
                Text(
                    text = "Skill Competency Benchmarks",
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.onSurface
                )
            }

            items(gapItems) { gap ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        SkillComparisonBar(
                            skillName = gap.skillName,
                            currentScore = gap.currentScore,
                            requiredScore = gap.requiredScore,
                            statusText = gap.status
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        Row(verticalAlignment = Alignment.Top) {
                            Icon(
                                imageVector = Icons.Default.WarningAmber,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.tertiary,
                                modifier = Modifier.padding(top = 2.dp, end = 6.dp)
                            )
                            Text(
                                text = gap.recommendation,
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }
            }

            item {
                Button(
                    onClick = onExplorePathway,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(text = "Bridge Gaps with Customized Pathway")
                }
            }
        }
    }
}
`,
  },
  {
    id: 'screen_pathway',
    name: 'LearningPathwayScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/LearningPathwayScreen.kt',
    category: 'Screens',
    description: 'Phased timeline roadmap: Foundations, Core Skills, System Projects, and Career Launch milestones.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.RadioButtonUnchecked
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
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar

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

@Composable
fun LearningPathwayScreen(
    modules: List<PathwayModuleUi>,
    onToggleTask: (moduleId: String, taskId: String) -> Unit,
    onNavigateBack: () -> Unit,
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
                    text = "Structured Career Milestone Roadmap",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Text(
                    text = "4 systematic phases bridging theoretical study into industry-ready software engineering.",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            items(modules) { module ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium,
                    colors = CardDefaults.cardColors(
                        containerColor = if (module.isCompleted) {
                            MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                        } else {
                            MaterialTheme.colorScheme.surface
                        }
                    )
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
        }
    }
}
`,
  },
  {
    id: 'screen_projects',
    name: 'PracticalProjectsScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/PracticalProjectsScreen.kt',
    category: 'Screens',
    description: 'Hands-on practical projects tracker: progress percentages, milestone checklists, and GitHub repositories.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.Checkbox
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.EYCTopAppBar

data class PracticalProjectUi(
    val id: String,
    val title: String,
    val domain: String,
    val difficulty: String,
    val estimatedHours: Int,
    val description: String,
    val skillsAcquired: List<String>,
    val status: String,
    val progressPercentage: Int,
    val milestones: List<ProjectMilestoneUi>,
    val githubRepo: String? = null
)

data class ProjectMilestoneUi(
    val id: String,
    val title: String,
    val isDone: Boolean
)

@Composable
fun PracticalProjectsScreen(
    projects: List<PracticalProjectUi>,
    onToggleMilestone: (projectId: String, milestoneId: String) -> Unit,
    onSubmitProject: (projectId: String) -> Unit,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Practical Projects & Progress",
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
                    text = "Portfolio Project Showcase",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Text(
                    text = "Build verifiable evidence demonstrating applied architecture and production craft.",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            items(projects) { project ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.large
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = project.domain,
                                style = MaterialTheme.typography.labelMedium,
                                color = MaterialTheme.colorScheme.primary
                            )
                            Text(
                                text = project.status,
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }

                        Spacer(modifier = Modifier.height(4.dp))

                        Text(
                            text = project.title,
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.onSurface
                        )

                        Spacer(modifier = Modifier.height(6.dp))

                        Text(
                            text = project.description,
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )

                        Spacer(modifier = Modifier.height(12.dp))

                        // Progress Bar
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text(
                                text = "Completion Progress",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                            Text(
                                text = "\${project.progressPercentage}%",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.primary
                            )
                        }

                        Spacer(modifier = Modifier.height(4.dp))

                        LinearProgressIndicator(
                            progress = { project.progressPercentage / 100f },
                            modifier = Modifier.fillMaxWidth()
                        )

                        Spacer(modifier = Modifier.height(12.dp))

                        // Milestones Checklist
                        Text(
                            text = "Milestones",
                            style = MaterialTheme.typography.labelMedium,
                            color = MaterialTheme.colorScheme.onSurface
                        )

                        project.milestones.forEach { milestone ->
                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(vertical = 2.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Checkbox(
                                    checked = milestone.isDone,
                                    onCheckedChange = { onToggleMilestone(project.id, milestone.id) }
                                )
                                Text(
                                    text = milestone.title,
                                    style = MaterialTheme.typography.bodySmall,
                                    color = if (milestone.isDone) {
                                        MaterialTheme.colorScheme.onSurfaceVariant
                                    } else {
                                        MaterialTheme.colorScheme.onSurface
                                    }
                                )
                            }
                        }

                        Spacer(modifier = Modifier.height(8.dp))

                        if (project.githubRepo != null) {
                            Text(
                                text = "Repo: \${project.githubRepo}",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.primary
                            )
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        Button(
                            onClick = { onSubmitProject(project.id) },
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Text(text = "Submit Evidence for Verification")
                        }
                    }
                }
            }
        }
    }
}
`,
  },
  {
    id: 'screen_readiness',
    name: 'CareerReadinessScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/CareerReadinessScreen.kt',
    category: 'Screens',
    description: 'Career Readiness and Re-assessment screen: 4 pillars radar breakdown and re-evaluation triggers.',
    code: `package com.eyc.careerguidance.ui.screens

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
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.CircularScoreIndicator
import com.eyc.careerguidance.ui.components.EYCTopAppBar

data class ReadinessPillarUi(
    val name: String,
    val score: Int,
    val status: String,
    val feedback: String
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
    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Career Readiness",
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
            // Overall Gauge
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
                            size = 140.dp,
                            strokeWidth = 12.dp
                        )
                        Spacer(modifier = Modifier.height(16.dp))
                        Text(
                            text = "Overall Market Readiness",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Text(
                            text = "Target Role: $targetRole",
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.primary
                        )
                    }
                }
            }

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
                                text = "\${pillar.score}% · \${pillar.status}",
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
`,
  },
  {
    id: 'screen_report',
    name: 'CareerReadinessReportScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/CareerReadinessReportScreen.kt',
    category: 'Screens',
    description: 'Career Readiness Report screen with executive summary, strengths, growth areas, and PDF export action.',
    code: `package com.eyc.careerguidance.ui.screens

import android.content.Context
import android.print.PrintAttributes
import android.print.PrintManager
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
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PictureAsPdf
import androidx.compose.material.icons.filled.Share
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import com.eyc.careerguidance.ui.components.CircularScoreIndicator
import com.eyc.careerguidance.ui.components.EYCTopAppBar

data class CareerReportSummaryUi(
    val studentName: String,
    val institution: String,
    val targetRole: String,
    val overallReadinessScore: Int,
    val generatedDate: String,
    val verifiedStrengths: List<String>,
    val prioritizedGrowthAreas: List<String>,
    val recommendedCertifications: List<String>
)

@Composable
fun CareerReadinessReportScreen(
    report: CareerReportSummaryUi,
    onExportPdfAction: () -> Unit,
    onShareReportAction: () -> Unit,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "Career Readiness Report",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack,
                actions = {
                    IconButton(onClick = onShareReportAction) {
                        Icon(
                            imageVector = Icons.Default.Share,
                            contentDescription = "Share Report"
                        )
                    }
                }
            )
        },
        bottomBar = {
            Button(
                onClick = onExportPdfAction,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp)
            ) {
                Icon(
                    imageVector = Icons.Default.PictureAsPdf,
                    contentDescription = null,
                    modifier = Modifier.padding(end = 8.dp)
                )
                Text(text = "Export Official PDF Report")
            }
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
            // Executive Header
            item {
                ElevatedCard(
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
                                    text = "Official Evaluation",
                                    style = MaterialTheme.typography.labelSmall,
                                    color = MaterialTheme.colorScheme.primary
                                )
                                Text(
                                    text = report.studentName,
                                    style = MaterialTheme.typography.titleLarge,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                                Text(
                                    text = report.institution,
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                            CircularScoreIndicator(
                                score = report.overallReadinessScore,
                                size = 88.dp,
                                strokeWidth = 8.dp
                            )
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        Text(
                            text = "Benchmark Target: \${report.targetRole}",
                            style = MaterialTheme.typography.titleSmall,
                            color = MaterialTheme.colorScheme.primary
                        )
                        Text(
                            text = "Report generated on \${report.generatedDate}",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            // Strengths Card
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium,
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.35f)
                    )
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(
                            text = "Verified Competitive Strengths",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.primary
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        report.verifiedStrengths.forEach { strength ->
                            Text(
                                text = "• $strength",
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurface,
                                modifier = Modifier.padding(vertical = 2.dp)
                            )
                        }
                    }
                }
            }

            // Growth Areas Card
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(
                            text = "Prioritized Growth & Bridge Areas",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        report.prioritizedGrowthAreas.forEach { growth ->
                            Text(
                                text = "• $growth",
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                                modifier = Modifier.padding(vertical = 2.dp)
                            )
                        }
                    }
                }
            }

            // Recommended Next Certifications
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.medium
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(
                            text = "Recommended Certifications",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        report.recommendedCertifications.forEach { cert ->
                            Text(
                                text = "• $cert",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                                modifier = Modifier.padding(vertical = 2.dp)
                            )
                        }
                    }
                }
            }
        }
    }
}
`,
  },
  {
    id: 'nav_destinations',
    name: 'EYCDestinations.kt',
    path: 'com/eyc/careerguidance/ui/navigation/EYCDestinations.kt',
    category: 'Navigation',
    description: 'Type-safe destinations for Jetpack Compose Navigation across all 10 screens and dashboard.',
    code: `package com.eyc.careerguidance.ui.navigation

sealed class EYCDestination(val route: String) {
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
`,
  },
  {
    id: 'nav_host',
    name: 'EYCNavHost.kt',
    path: 'com/eyc/careerguidance/ui/navigation/EYCNavHost.kt',
    category: 'Navigation',
    description: 'Complete NavHost configuration orchestrating screen transitions and callbacks.',
    code: `package com.eyc.careerguidance.ui.navigation

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
        startDestination = EYCDestination.Home.route,
        modifier = modifier
    ) {
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
                questions = emptyList(), // Hook to your ViewModel data
                onCompleteAssessment = { navController.navigate(EYCDestination.CareerMatches.route) },
                onNavigateBack = { navController.popBackStack() }
            )
        }

        composable(EYCDestination.SkillAssessment.route) {
            SkillAssessmentScreen(
                skills = emptyList(), // Hook to your ViewModel data
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
`,
  },
  {
    id: 'screen_enter_location',
    name: 'EnterLocationScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/EnterLocationScreen.kt',
    category: 'Screens',
    description: 'Student onboarding screen for entering City / State and selecting Preferred Language (Marathi, Hindi, English, Other).',
    code: `package com.eyc.careerguidance.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun EnterLocationScreen(
    studentName: String,
    onContinue: (cityState: String, preferredLang: String) -> Unit,
    onBack: () -> Unit,
    onSkip: () -> Unit,
    modifier: Modifier = Modifier
) {
    var cityState by remember { mutableStateOf("") }
    var selectedLang by remember { mutableStateOf("Marathi") }
    val languages = listOf("Marathi", "Hindi", "English", "Other")

    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(24.dp),
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        // Top Back Navigation
        IconButton(onClick = onBack) {
            Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back", tint = MaterialTheme.colorScheme.primary)
        }

        // Center Content
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.fillMaxWidth()
        ) {
            // Profile Preview
            Surface(
                shape = CircleShape,
                color = MaterialTheme.colorScheme.primaryContainer,
                modifier = Modifier.size(96.dp)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Text(studentName.take(1), fontSize = 32.sp, fontWeight = FontWeight.Bold)
                }
            }
            Text(studentName, fontWeight = FontWeight.Bold, modifier = Modifier.padding(top = 8.dp))

            Spacer(modifier = Modifier.height(24.dp))

            // Card Form
            Card(
                shape = RoundedCornerShape(24.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(20.dp)) {
                    Text("City / State", style = MaterialTheme.typography.labelMedium)
                    Spacer(modifier = Modifier.height(6.dp))
                    OutlinedTextField(
                        value = cityState,
                        onValueChange = { cityState = it },
                        placeholder = { Text("City / State") },
                        shape = RoundedCornerShape(16.dp),
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(16.dp))
                    Text("Preferred Language", style = MaterialTheme.typography.labelMedium)
                    Spacer(modifier = Modifier.height(8.dp))
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        languages.forEach { lang ->
                            FilterChip(
                                selected = selectedLang == lang,
                                onClick = { selectedLang = lang },
                                label = { Text(lang) },
                                leadingIcon = if (selectedLang == lang) {
                                    { Icon(Icons.Default.Check, contentDescription = null, modifier = Modifier.size(16.dp)) }
                                } else null
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(20.dp))
                    Button(
                        onClick = { onContinue(cityState, selectedLang) },
                        shape = RoundedCornerShape(16.dp),
                        modifier = Modifier.fillMaxWidth().height(48.dp)
                    ) {
                        Text("Next", fontWeight = FontWeight.Bold)
                        Spacer(modifier = Modifier.width(6.dp))
                        Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                    }
                }
            }
        }

        // Bottom Skip
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.End
        ) {
            TextButton(onClick = onSkip) {
                Text("Skip this question", fontSize = 12.sp)
                Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null, modifier = Modifier.size(14.dp))
            }
        }
    }
}
`,
  },
  {
    id: 'screen_enter_education',
    name: 'EnterEducationScreen.kt',
    path: 'com/eyc/careerguidance/ui/screens/EnterEducationScreen.kt',
    category: 'Screens',
    description: 'Current Education Level onboarding screen (10th, 12th, ITI, Diploma, Graduation, Post-Graduation, Other).',
    code: `package com.eyc.careerguidance.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Check
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun EnterEducationScreen(
    studentName: String,
    onContinue: (educationLevel: String) -> Unit,
    onBack: () -> Unit,
    onSkip: () -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedLevel by remember { mutableStateOf("Diploma") }
    val levels = listOf("10th", "12th", "ITI", "Diploma", "Graduation", "Post-Graduation", "Other")

    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(24.dp),
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        IconButton(onClick = onBack) {
            Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back", tint = MaterialTheme.colorScheme.primary)
        }

        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.fillMaxWidth()
        ) {
            Surface(
                shape = CircleShape,
                color = MaterialTheme.colorScheme.primaryContainer,
                modifier = Modifier.size(96.dp)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Text(studentName.take(1), fontSize = 32.sp, fontWeight = FontWeight.Bold)
                }
            }
            Text(studentName, fontWeight = FontWeight.Bold, modifier = Modifier.padding(top = 8.dp))

            Spacer(modifier = Modifier.height(24.dp))

            Card(
                shape = RoundedCornerShape(24.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(20.dp)) {
                    Text("Current Education Level", style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
                    Spacer(modifier = Modifier.height(12.dp))

                    levels.chunked(2).forEach { rowLevels ->
                        Row(
                            modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
                            horizontalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            rowLevels.forEach { lvl ->
                                FilterChip(
                                    selected = selectedLevel == lvl,
                                    onClick = { selectedLevel = lvl },
                                    label = { Text(lvl) },
                                    leadingIcon = if (selectedLevel == lvl) {
                                        { Icon(Icons.Default.Check, contentDescription = null, modifier = Modifier.size(16.dp)) }
                                    } else null,
                                    modifier = Modifier.weight(1f)
                                )
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(20.dp))
                    Button(
                        onClick = { onContinue(selectedLevel) },
                        shape = RoundedCornerShape(16.dp),
                        modifier = Modifier.fillMaxWidth().height(48.dp)
                    ) {
                        Text("Next", fontWeight = FontWeight.Bold)
                        Spacer(modifier = Modifier.width(6.dp))
                        Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                    }
                }
            }
        }

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.End
        ) {
            TextButton(onClick = onSkip) {
                Text("Skip this question", fontSize = 12.sp)
                Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null, modifier = Modifier.size(14.dp))
            }
        }
    }
}
`,
  },
  {
    id: 'activity_main',
    name: 'MainActivity.kt',
    path: 'com/eyc/careerguidance/ui/MainActivity.kt',
    category: 'Architecture',
    description: 'Android Entrypoint Activity hosting EYCCareerTheme and the EYCNavHost.',
    code: `package com.eyc.careerguidance.ui

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.navigation.compose.rememberNavController
import com.eyc.careerguidance.ui.navigation.EYCNavHost
import com.eyc.careerguidance.ui.theme.EYCCareerTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            EYCCareerTheme {
                Surface(modifier = Modifier.fillMaxSize()) {
                    val navController = rememberNavController()
                    EYCNavHost(navController = navController)
                }
            }
        }
    }
}
`,
  },
];
