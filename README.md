# 출석체크 서버

- 박범식 · 2025-11-03

교회 출석 체크용 백엔드 서버입니다. 

## 빠른 시작

### 요구사항
- Node.js 18 이상 (ESM 모듈 사용)
- npm 8 이상

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행 (기본 포트: 3000)
npm start
```

### 서버 동작
- 기본 엔드포인트: `http://localhost:3000`
- 미구현 경로는 모두 404 "Not Found"를 반환합니다.

## API 개요

### Members
- Base URL: `/members`

엔드포인트 | 메서드 | 설명 | 현재 상태
---|---|---|---
`/members` | GET | 멤버 목록 조회 | TODO(플레이스홀더 응답)
`/members` | POST | 멤버 생성 | TODO(플레이스홀더 응답)
`/members/:id` | PUT | 특정 멤버 수정 | TODO(플레이스홀더 응답)
`/members/:id` | DELETE | 특정 멤버 삭제 | TODO(플레이스홀더 응답)

### Attendance
- Base URL: `/attendance`

엔드포인트 | 메서드 | 설명 | 현재 상태
---|---|---|---
`/attendance` | GET | 실시간 출석 조회(폴링) | Planned
`/attendance` | POST | 출석 체크 등록 | Planned

## 프로젝트 로드맵
1) MVP 구현 (Express · 로컬 실행)
2) Cloudflare 배포(Workers)로 전환
3) TypeScript 리팩토링
4) 데이터 계층: D1(SQLite) 도입, Workers KV 활용

## 기술 스택
- Node.js
- Express.js
- JavaScript → TypeScript (리팩토링 예정)
- Cloudflare D1(SQLite), Workers KV
