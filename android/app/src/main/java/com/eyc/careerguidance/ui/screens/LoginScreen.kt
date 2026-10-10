package com.eyc.careerguidance.ui.screens

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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * 00. SIS Login Screen
 * App Name: SIS (Smart Intelligence Students)
 * Authentication: Phone Number (OTP) or Gmail
 * Clean and distraction-free design.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LoginScreen(
    onLoginSuccess: (studentName: String, contact: String, method: String) -> Unit,
    onExploreAsGuest: () -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedTab by remember { mutableStateOf(0) } // 0 = Phone, 1 = Gmail
    var phoneNumber by remember { mutableStateOf("9876543210") }
    var otpSent by remember { mutableStateOf(false) }
    var otpValue by remember { mutableStateOf("4821") }
    var emailAddress by remember { mutableStateOf("student@gmail.com") }

    Column(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
            .verticalScroll(rememberScrollState())
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        // App Title: SIS - Smart Intelligence Students
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(bottom = 24.dp)
        ) {
            Surface(
                shape = RoundedCornerShape(20.dp),
                color = Color(0xFF059669),
                modifier = Modifier.size(64.dp)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Text(text = "SIS", fontWeight = FontWeight.Black, color = Color.White, fontSize = 22.sp)
                }
            }
            Spacer(modifier = Modifier.height(10.dp))
            Text(
                text = "SIS",
                fontSize = 28.sp,
                fontWeight = FontWeight.Black,
                color = MaterialTheme.colorScheme.onBackground
            )
            Text(
                text = "SMART INTELLIGENCE STUDENTS",
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF059669),
                letterSpacing = 1.sp
            )
        }

        // Login Method Switcher
        TabRow(
            selectedTabIndex = selectedTab,
            modifier = Modifier
                .fillMaxWidth()
                .padding(bottom = 20.dp)
        ) {
            Tab(
                selected = selectedTab == 0,
                onClick = { selectedTab = 0 },
                text = { Text("Phone Number", fontWeight = FontWeight.Bold) }
            )
            Tab(
                selected = selectedTab == 1,
                onClick = { selectedTab = 1 },
                text = { Text("Gmail", fontWeight = FontWeight.Bold) }
            )
        }

        // Input Card
        Card(
            shape = RoundedCornerShape(24.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
            elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
            modifier = Modifier.fillMaxWidth()
        ) {
            Column(modifier = Modifier.padding(20.dp)) {
                if (selectedTab == 0) {
                    // Phone Number
                    OutlinedTextField(
                        value = phoneNumber,
                        onValueChange = { if (it.length <= 10) phoneNumber = it },
                        label = { Text("Phone Number") },
                        leadingIcon = { Text(" +91 ", fontWeight = FontWeight.Bold) },
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Phone),
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(16.dp)
                    )

                    Spacer(modifier = Modifier.height(14.dp))

                    if (otpSent) {
                        OutlinedTextField(
                            value = otpValue,
                            onValueChange = { otpValue = it },
                            label = { Text("Enter OTP") },
                            modifier = Modifier.fillMaxWidth(),
                            shape = RoundedCornerShape(16.dp)
                        )
                        Spacer(modifier = Modifier.height(14.dp))
                        Button(
                            onClick = { onLoginSuccess("अथर्व पाटील", "+91 $phoneNumber", "phone") },
                            shape = RoundedCornerShape(16.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF059669)),
                            modifier = Modifier.fillMaxWidth().height(48.dp)
                        ) {
                            Text("Login", fontWeight = FontWeight.Bold)
                        }
                    } else {
                        Button(
                            onClick = { otpSent = true },
                            shape = RoundedCornerShape(16.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF059669)),
                            modifier = Modifier.fillMaxWidth().height(48.dp)
                        ) {
                            Text("Send OTP", fontWeight = FontWeight.Bold)
                        }
                    }
                } else {
                    // Gmail
                    OutlinedTextField(
                        value = emailAddress,
                        onValueChange = { emailAddress = it },
                        label = { Text("Gmail") },
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email),
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(16.dp)
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    Button(
                        onClick = { onLoginSuccess("अथर्व पाटील", emailAddress, "gmail") },
                        shape = RoundedCornerShape(16.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF059669)),
                        modifier = Modifier.fillMaxWidth().height(48.dp)
                    ) {
                        Text("Sign in with Gmail", fontWeight = FontWeight.Bold)
                    }
                }

                // Demo link
                Spacer(modifier = Modifier.height(14.dp))
                TextButton(
                    onClick = onExploreAsGuest,
                    modifier = Modifier.align(Alignment.CenterHorizontally)
                ) {
                    Text("Demo Direct Login", color = Color(0xFF059669), fontWeight = FontWeight.Bold)
                }
            }
        }
    }
}
