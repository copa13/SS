package com.eyc.careerguidance.ui.theme

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
