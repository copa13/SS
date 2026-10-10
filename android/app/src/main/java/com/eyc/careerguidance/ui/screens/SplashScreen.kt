package com.eyc.careerguidance.ui.screens

import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDownward
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay

/**
 * Android Splash Screen featuring:
 * 1. Big lush tree with spreading branches
 * 2. Playful monkey descending along a vine from the branches
 * 3. Monkey waving "Hi there students"
 * 4. Monkey pulling down the SIS login card smoothly
 */
@Composable
fun SplashScreen(
    onNavigateToLogin: () -> Unit,
    modifier: Modifier = Modifier
) {
    var animStage by remember { mutableStateOf(0) } // 0: descending, 1: waving, 2: pulling

    // Transition animations
    val infiniteTransition = rememberInfiniteTransition(label = "waveTransition")
    val waveAngle by infiniteTransition.animateFloat(
        initialValue = -25f,
        targetValue = 20f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 500, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "waveAngle"
    )

    // Animated descent of monkey
    val monkeyOffsetY by animateDpAsState(
        targetValue = when (animStage) {
            0 -> 40.dp
            1 -> 110.dp
            else -> 140.dp
        },
        animationSpec = tween(durationMillis = 1000, easing = FastOutSlowInEasing),
        label = "monkeyDescent"
    )

    // Sequence timer
    LaunchedEffect(Unit) {
        delay(1200)
        animStage = 1 // waving
        delay(1600)
        animStage = 2 // pulling
        delay(1000)
        onNavigateToLogin()
    }

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(
                Brush.verticalGradient(
                    colors = listOf(
                        Color(0xFFE8F5E9),
                        Color(0xFFF1F8E9),
                        Color(0xFFE0F2F1)
                    )
                )
            )
    ) {
        // --- 1. Top Lush Tree Branches & Leaves ---
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp)
        ) {
            // Main branch
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(48.dp)
                    .background(Color(0xFF5D4037))
            )

            // Leaf clusters across top
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .offset(y = (-10).dp),
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                repeat(6) {
                    Box(
                        modifier = Modifier
                            .size(72.dp)
                            .clip(CircleShape)
                            .background(if (it % 2 == 0) Color(0xFF2E7D32) else Color(0xFF43A047))
                    )
                }
            }
        }

        // --- 2. Monkey Descending, Waving & Pulling ---
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier
                .align(Alignment.TopCenter)
                .offset(y = monkeyOffsetY)
        ) {
            // Hanging Vine
            Box(
                modifier = Modifier
                    .width(4.dp)
                    .height(60.dp)
                    .background(Color(0xFF8D6E63))
            )

            // Clean Speech Bubble: "Hi there students"
            if (animStage >= 1) {
                Surface(
                    shape = RoundedCornerShape(16.dp),
                    color = Color.White,
                    shadowElevation = 6.dp,
                    modifier = Modifier.padding(bottom = 8.dp)
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.padding(horizontal = 14.dp, vertical = 6.dp)
                    ) {
                        Text(text = "👋", fontSize = 16.sp)
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "Hi there students",
                            fontWeight = FontWeight.Bold,
                            color = Color(0xFF1B5E20),
                            fontSize = 14.sp
                        )
                    }
                }
            }

            // Cute Cartoon Monkey
            Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier.size(110.dp)
            ) {
                // Monkey Head
                Box(
                    modifier = Modifier
                        .size(76.dp)
                        .clip(CircleShape)
                        .background(Color(0xFF8D5B4C))
                ) {
                    // Face inner mask
                    Box(
                        modifier = Modifier
                            .size(54.dp)
                            .clip(CircleShape)
                            .background(Color(0xFFF5D6C6))
                            .align(Alignment.Center)
                    ) {
                        // Eyes
                        Row(
                            modifier = Modifier
                                .align(Alignment.Center)
                                .offset(y = (-6).dp),
                            horizontalArrangement = Arrangement.spacedBy(14.dp)
                        ) {
                            Box(modifier = Modifier.size(8.dp).clip(CircleShape).background(Color(0xFF1E293B)))
                            Box(modifier = Modifier.size(8.dp).clip(CircleShape).background(Color(0xFF1E293B)))
                        }
                    }
                }

                // Monkey Ears
                Box(
                    modifier = Modifier
                        .align(Alignment.CenterStart)
                        .offset(x = 10.dp)
                        .size(24.dp)
                        .clip(CircleShape)
                        .background(Color(0xFF8D5B4C))
                )
                Box(
                    modifier = Modifier
                        .align(Alignment.CenterEnd)
                        .offset(x = (-10).dp)
                        .size(24.dp)
                        .clip(CircleShape)
                        .background(Color(0xFF8D5B4C))
                )

                // Waving Hand
                Box(
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .offset(x = 4.dp, y = 6.dp)
                        .rotate(if (animStage >= 1) waveAngle else 0f)
                ) {
                    Surface(shape = CircleShape, color = Color(0xFFD7A18C), modifier = Modifier.size(28.dp)) {
                        Box(contentAlignment = Alignment.Center) {
                            Text("✋", fontSize = 14.sp)
                        }
                    }
                }
            }

            // Pull Rope
            Box(
                modifier = Modifier
                    .width(4.dp)
                    .height(30.dp)
                    .background(Color(0xFFD97706))
            )
        }

        // --- 3. Pull-Down SIS Login Card ---
        Card(
            shape = RoundedCornerShape(28.dp),
            colors = CardDefaults.cardColors(containerColor = Color.White),
            elevation = CardDefaults.cardElevation(defaultElevation = 8.dp),
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
                .padding(20.dp)
                .clickable { onNavigateToLogin() }
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.padding(20.dp)
            ) {
                Text(
                    text = "SIS",
                    fontWeight = FontWeight.Black,
                    fontSize = 28.sp,
                    color = Color(0xFF0F172A)
                )
                Text(
                    text = "SMART INTELLIGENCE STUDENTS",
                    fontWeight = FontWeight.Bold,
                    fontSize = 11.sp,
                    color = Color(0xFF059669),
                    letterSpacing = 1.sp
                )
                Spacer(modifier = Modifier.height(14.dp))
                Button(
                    onClick = onNavigateToLogin,
                    shape = RoundedCornerShape(16.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF059669)),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(text = "Pull to Login", fontWeight = FontWeight.Bold)
                    Spacer(modifier = Modifier.width(6.dp))
                    Icon(Icons.Default.ArrowDownward, contentDescription = null, modifier = Modifier.size(18.dp))
                }
            }
        }
    }
}
