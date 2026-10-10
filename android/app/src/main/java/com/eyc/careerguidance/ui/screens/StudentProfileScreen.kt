package com.eyc.careerguidance.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.eyc.careerguidance.ui.components.EYCTopAppBar

/**
 * 01. Student Profile Screen (विद्यार्थी प्रोफाइल)
 * Contains all 25 structured profile options & 5 profile actions:
 * Actions:
 * 1. Save Profile
 * 2. Edit Profile
 * 3. Update Skills
 * 4. Profile Completion Progress
 * 5. Start Assessment (Step 02)
 */
@Composable
fun StudentProfileScreen(
    name: String = "अथर्व पाटील (Atharva Patil)",
    university: String = "शासकीय तंत्रनिकेतन पुणे",
    major: String = "Computer Science",
    gradYear: String = "2026",
    targetRole: String = "Software Developer",
    bio: String = "कॉम्प्युटर सायन्सचा विद्यार्थी, प्रॅक्टिकल वेब प्रोजेक्ट्स आणि कोडिंग शिकण्याची आवड.",
    onNavigateBack: () -> Unit = {},
    onEditProfileClick: () -> Unit = {},
    onStartAssessmentClick: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    var isEditing by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            EYCTopAppBar(
                title = "०१. विद्यार्थी प्रोफाइल",
                canNavigateBack = true,
                onNavigateBack = onNavigateBack,
                actions = {
                    IconButton(onClick = { isEditing = !isEditing }) {
                        Icon(
                            imageVector = if (isEditing) Icons.Default.Check else Icons.Default.Edit,
                            contentDescription = "Edit or Save",
                            tint = Color(0xFFEA580C)
                        )
                    }
                }
            )
        },
        modifier = modifier
    ) { paddingValues ->
        LazyColumn(
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp),
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            // Profile Completion Progress Card (Action 4)
            item {
                Card(
                    shape = RoundedCornerShape(24.dp),
                    colors = CardDefaults.cardColors(containerColor = Color(0xFFFFF7ED)),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Column(modifier = Modifier.padding(18.dp)) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.SpaceBetween,
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Box(
                                    modifier = Modifier
                                        .size(54.dp)
                                        .clip(CircleShape)
                                        .background(Color(0xFFEA580C)),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Text("🎓", fontSize = 24.sp)
                                }
                                Spacer(modifier = Modifier.width(12.dp))
                                Column {
                                    Text(name, fontWeight = FontWeight.Black, fontSize = 16.sp, color = Color(0xFF1E293B))
                                    Text("पुणे, महाराष्ट्र • $major", fontSize = 12.sp, color = Color(0xFF64748B))
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(14.dp))

                        // Completion Bar
                        Row(
                            horizontalArrangement = Arrangement.SpaceBetween,
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Text("प्रोफाइल पूर्णता (Profile Completion)", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color(0xFF9A3412))
                            Text("92%", fontSize = 12.sp, fontWeight = FontWeight.Black, color = Color(0xFFEA580C))
                        }
                        Spacer(modifier = Modifier.height(6.dp))
                        LinearProgressIndicator(
                            progress = { 0.92f },
                            color = Color(0xFFEA580C),
                            trackColor = Color(0xFFFFEDD5),
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(8.dp)
                                .clip(RoundedCornerShape(4.dp))
                        )
                    }
                }
            }

            // Part 1: वैयक्तिक माहिती (१ ते ५)
            item {
                Card(shape = RoundedCornerShape(20.dp), modifier = Modifier.fillMaxWidth()) {
                    Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text("भाग १: वैयक्तिक माहिती (Personal Info)", fontWeight = FontWeight.Black, fontSize = 13.sp, color = Color(0xFFEA580C))
                        ProfileDetailRow("१. Full Name", name)
                        ProfileDetailRow("२. Profile Photo", "Avatar 01 (Upload उपलब्ध)")
                        ProfileDetailRow("३. Age / DOB", "20 वर्षे (18 मे 2004)")
                        ProfileDetailRow("४. City / State", "पुणे, महाराष्ट्र")
                        ProfileDetailRow("५. Preferred Language", "मराठी (Marathi)")
                    }
                }
            }

            // Part 2: शिक्षण माहिती (६ ते ११)
            item {
                Card(shape = RoundedCornerShape(20.dp), modifier = Modifier.fillMaxWidth()) {
                    Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text("भाग २: शिक्षण तपशील (Education Details)", fontWeight = FontWeight.Black, fontSize = 13.sp, color = Color(0xFFEA580C))
                        ProfileDetailRow("६. Education Level", "Diploma in Engineering")
                        ProfileDetailRow("७. Education Status", "Studying (शिकत आहे)")
                        ProfileDetailRow("८. Course / Stream", "Computer Science / IT")
                        ProfileDetailRow("९. Institute Name", university)
                        ProfileDetailRow("१०. Passing Year", gradYear)
                        ProfileDetailRow("११. Performance", "8.4 CGPA (82%)")
                    }
                }
            }

            // Part 3: कौशल्ये व करिअर (१२ ते १८)
            item {
                Card(shape = RoundedCornerShape(20.dp), modifier = Modifier.fillMaxWidth()) {
                    Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text("भाग ३: कौशल्ये व करिअर (Skills & Career)", fontWeight = FontWeight.Black, fontSize = 13.sp, color = Color(0xFFEA580C))
                        ProfileDetailRow("१२. Career Interests", "Software, Web Development, AI")
                        ProfileDetailRow("१३. Current Skills", "Python, JavaScript, HTML/CSS, SQL")
                        ProfileDetailRow("१४. Skill Level", "Intermediate (मध्यम)")
                        ProfileDetailRow("१५. Strengths", "Coding, Logical Thinking, Problem Solving")
                        ProfileDetailRow("१६. Career Goal", "Job (नोकरी)")
                        ProfileDetailRow("१७. Preferred Industry", "IT & Software Services")
                        ProfileDetailRow("१८. Work Mode", "Hybrid / Remote")
                    }
                }
            }

            // Part 4: अभ्यास, उद्दिष्टे व आव्हाने (१९ ते २५)
            item {
                Card(shape = RoundedCornerShape(20.dp), modifier = Modifier.fillMaxWidth()) {
                    Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text("भाग ४: उद्दिष्टे व आव्हाने (Goals & Challenges)", fontWeight = FontWeight.Black, fontSize = 13.sp, color = Color(0xFFEA580C))
                        ProfileDetailRow("१९. Learning Preference", "Practical Projects & Interactive Lessons")
                        ProfileDetailRow("२०. Daily Learning Time", "1–2 hours")
                        ProfileDetailRow("२१. Experience", "Fresher (नवशिका)")
                        ProfileDetailRow("२२. Short-Term Goal", "पुढील 3-6 महिन्यांत प्रॅक्टिकल वेब प्रोजेक्ट्स पूर्ण करणे")
                        ProfileDetailRow("२३. Long-Term Goal", "Senior Software / AI Developer होणे")
                        ProfileDetailRow("२४. Current Challenges", "Interview Preparation, Experience कमी आहे")
                        ProfileDetailRow("२५. Additional Notes", "मराठीतून सोप्या भाषेत करिअर गायडन्स हवं आहे")
                    }
                }
            }

            // Actions: Save Profile / Edit & Start Assessment (Action 5)
            item {
                Row(
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                    modifier = Modifier.fillMaxWidth().padding(top = 8.dp)
                ) {
                    OutlinedButton(
                        onClick = onEditProfileClick,
                        shape = RoundedCornerShape(16.dp),
                        modifier = Modifier.weight(1f)
                    ) {
                        Text("Edit Profile", fontWeight = FontWeight.Bold)
                    }
                    Button(
                        onClick = onStartAssessmentClick,
                        shape = RoundedCornerShape(16.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFEA580C)),
                        modifier = Modifier.weight(1f)
                    ) {
                        Text("Start Assessment ➔", fontWeight = FontWeight.Bold)
                    }
                }
            }
        }
    }
}

@Composable
fun ProfileDetailRow(label: String, value: String) {
    Row(
        horizontalArrangement = Arrangement.SpaceBetween,
        modifier = Modifier.fillMaxWidth().padding(vertical = 2.dp)
    ) {
        Text(text = label, fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFF64748B), modifier = Modifier.weight(0.45f))
        Text(text = value, fontSize = 11.sp, fontWeight = FontWeight.Medium, color = Color(0xFF1E293B), modifier = Modifier.weight(0.55f))
    }
}
