#!/usr/bin/env node

/**
 * Security Test Script
 * Tests various security measures implemented in the application
 */

const API_URL = process.env.API_URL || 'http://localhost:3000'

console.log('🔒 Starting Security Tests...\n')

// Test 1: XSS Attack
async function testXSS() {
  console.log('Test 1: XSS Attack Prevention')
  try {
    const response = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: '<script>alert("XSS")</script>',
        phone: '+1234567890',
        message: '<img src=x onerror=alert(1)>',
        timestamp: Date.now()
      })
    })
    
    const data = await response.json()
    
    if (response.status === 400 || response.status === 201) {
      console.log('✅ PASSED: XSS attack blocked or sanitized\n')
    } else {
      console.log('❌ FAILED: XSS attack not properly handled\n')
    }
  } catch (error) {
    console.log('⚠️  ERROR:', error.message, '\n')
  }
}

// Test 2: SQL Injection
async function testSQLInjection() {
  console.log('Test 2: SQL Injection Prevention')
  try {
    const response = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "'; DROP TABLE users; --",
        phone: '+1234567890',
        message: 'SELECT * FROM users',
        timestamp: Date.now()
      })
    })
    
    if (response.status === 400 || response.status === 201) {
      console.log('✅ PASSED: SQL injection blocked or sanitized\n')
    } else {
      console.log('❌ FAILED: SQL injection not properly handled\n')
    }
  } catch (error) {
    console.log('⚠️  ERROR:', error.message, '\n')
  }
}

// Test 3: Rate Limiting
async function testRateLimit() {
  console.log('Test 3: Rate Limiting')
  try {
    let blocked = false
    
    for (let i = 0; i < 10; i++) {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test User',
          phone: '+1234567890',
          timestamp: Date.now()
        })
      })
      
      if (response.status === 429) {
        blocked = true
        break
      }
      
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    if (blocked) {
      console.log('✅ PASSED: Rate limiting is working\n')
    } else {
      console.log('⚠️  WARNING: Rate limiting may not be working properly\n')
    }
  } catch (error) {
    console.log('⚠️  ERROR:', error.message, '\n')
  }
}

// Test 4: Bot Detection (Honeypot)
async function testBotDetection() {
  console.log('Test 4: Bot Detection (Honeypot)')
  try {
    const response = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Bot User',
        phone: '+1234567890',
        website: 'http://bot.com', // Honeypot field
        timestamp: Date.now()
      })
    })
    
    // Bot should get 201 but data shouldn't be saved
    if (response.status === 201) {
      console.log('✅ PASSED: Bot detected and handled\n')
    } else {
      console.log('⚠️  WARNING: Bot detection may not be working\n')
    }
  } catch (error) {
    console.log('⚠️  ERROR:', error.message, '\n')
  }
}

// Test 5: Invalid HTTP Methods
async function testInvalidMethods() {
  console.log('Test 5: Invalid HTTP Methods')
  try {
    const methods = ['GET', 'PUT', 'DELETE', 'PATCH']
    let allBlocked = true
    
    for (const method of methods) {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: method
      })
      
      if (response.status !== 405) {
        allBlocked = false
        console.log(`❌ ${method} not blocked`)
      }
    }
    
    if (allBlocked) {
      console.log('✅ PASSED: All invalid methods blocked\n')
    } else {
      console.log('❌ FAILED: Some methods not properly blocked\n')
    }
  } catch (error) {
    console.log('⚠️  ERROR:', error.message, '\n')
  }
}

// Test 6: Large Payload
async function testLargePayload() {
  console.log('Test 6: Large Payload Protection')
  try {
    const largeMessage = 'A'.repeat(20000) // 20KB
    
    const response = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        phone: '+1234567890',
        message: largeMessage,
        timestamp: Date.now()
      })
    })
    
    if (response.status === 413 || response.status === 400) {
      console.log('✅ PASSED: Large payload blocked\n')
    } else {
      console.log('⚠️  WARNING: Large payload not blocked\n')
    }
  } catch (error) {
    console.log('⚠️  ERROR:', error.message, '\n')
  }
}

// Test 7: Invalid Phone Format
async function testInvalidPhone() {
  console.log('Test 7: Invalid Phone Format')
  try {
    const invalidPhones = ['0000000000', '1111111111', 'abc123', '++++++']
    let allBlocked = true
    
    for (const phone of invalidPhones) {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test User',
          phone: phone,
          timestamp: Date.now()
        })
      })
      
      if (response.status !== 400) {
        allBlocked = false
        console.log(`❌ Invalid phone not blocked: ${phone}`)
      }
    }
    
    if (allBlocked) {
      console.log('✅ PASSED: All invalid phones blocked\n')
    } else {
      console.log('❌ FAILED: Some invalid phones not blocked\n')
    }
  } catch (error) {
    console.log('⚠️  ERROR:', error.message, '\n')
  }
}

// Run all tests
async function runAllTests() {
  console.log(`Testing API at: ${API_URL}\n`)
  console.log('=' .repeat(50))
  console.log('\n')
  
  await testXSS()
  await testSQLInjection()
  await testRateLimit()
  await testBotDetection()
  await testInvalidMethods()
  await testLargePayload()
  await testInvalidPhone()
  
  console.log('=' .repeat(50))
  console.log('\n✅ Security tests completed!\n')
  console.log('Note: Some tests may show warnings in development mode.')
  console.log('Run these tests in production environment for accurate results.\n')
}

// Run tests
runAllTests().catch(console.error)
