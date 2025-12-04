# StudyScribe

## Overview

StudyScribe is a full-stack academic collaboration platform designed to bridge the gap between students seeking academic help and writers/tutors offering their expertise. Students can hire writers for assignments, attend live lectures, download notes, and chat or video call with mentors using WebRTC. Writers can monetize their skills by offering tutoring sessions, completing assignments, and selling study materials.

This platform integrates Firebase, WebRTC, Cloudinary, and AWS cloud services to ensure scalability, security, and real-time performance.

## Features

### Student Features

* Browse and hire verified writers
* Upload question papers or notes
* Schedule and attend live lectures (WebRTC)
* Real-time chat and video calling
* Secure payments and scheduling

### Writer Features

* Apply as a verified writer/tutor
* Accept writing or tutoring requests
* Host live classes
* Receive real-time notifications
* Upload notes or study materials for sale

### Admin Features

* User and writer verification
* Monitor sessions and reports
* Manage platform analytics and security

## Architecture Overview

### Frontend

* HTML, Tailwind CSS, JavaScript
* Hosted on AWS S3 + CloudFront

### Backend & Real-Time Services

* Firebase Authentication
* Firestore Database
* Firebase Functions
* Cloudinary for file storage
* WebRTC for real-time video/audio

### AWS Infrastructure

* AWS S3 for frontend hosting
* AWS CloudFront CDN
* AWS CodePipeline for CI/CD
* AWS CloudWatch for monitoring
* AWS WAF + Shield for security
* IAM roles for access management

## Tech Stack

| Layer        | Technology                            |
| ------------ | ------------------------------------- |
| Frontend     | HTML, Tailwind CSS, JavaScript        |
| Backend      | Firebase (Auth, Firestore, Functions) |
| File Storage | Cloudinary                            |
| Realtime     | WebRTC + Firebase                     |
| Deployment   | AWS (S3, CloudFront, CodePipeline)    |

## Project Structure

```
studyscribe/
│── public/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── notes.html
│   ├── papers.html
│   ├── quiz.html
│   ├── roadmap.html
│   ├── profile.html
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   │   ├── firebaseConfig.js
│   │   │   ├── auth.js
│   │   │   ├── dashboard.js
│   │   │   ├── notes.js
│   │   │   ├── cloudinary.js
│   │   │   ├── webrtc.js
│   │   │   └── schedule.js
│
│── functions/   # Firebase Cloud Functions
│── README.md
│── package.json
```

## How It Works

### Scheduling System

Students select a writer and choose date/time/duration. Firebase stores session details, and writers receive notifications.

### Live Lecture System

Writers create a live class room using WebRTC. Students join via room ID and a P2P connection is established.

### File Storage

Notes and papers are uploaded to Cloudinary. Firestore stores metadata and download URLs.

### Security

* JWT + Firebase Rules
* HTTPS (AWS ACM)
* AWS WAF for DDoS protection
* IAM role-based security

## Monetization

* Writers earn via assignments, notes, and tutoring
* Students pay using secure gateways (Stripe/Razorpay)
* StudyScribe takes 10–15% commission per transaction

## Monitoring & Analytics

* Firebase Analytics
* AWS CloudWatch for logs and metrics
* Firestore session/activity tracking

## Future Enhancements

* AI-based assignment review
* Plagiarism detection
* Mobile app (Flutter)
* Blockchain-based certificate verification
* Multi-language support

## Author

Dev Niraj Singh

## License

MIT License
