---
layout: post
title: 내가 걷는 길 (The Road I Walk)
info: 2022 스토브 온라인게임잼 출품작과 온라인 점수 집계 API
tech: Game Jam / Ruby on Rails / JSON API / SQLite / Game Backend
type: personal
---

## 내가 걷는 길

내가 걷는 길은 2022 스토브 온라인게임잼 출품작입니다.

이 프로젝트는 게임 본체와 온라인 점수 집계 API로 나뉘어 있습니다. 게임 본체는 팀 프로젝트로 제작했고, 신재훈은 그중 **온라인 점수 집계 API**를 담당했습니다.

게임잼 프로젝트였기 때문에 제한된 시간 안에 게임을 완성하고, 플레이 결과를 서버에 저장해 온라인으로 점수를 확인할 수 있는 구조를 만드는 것이 목표였습니다.

## 프로젝트 페이지

* [게임 본체 저장소](https://github.com/ShinJaehun/stovegamejam_theroadiwalk)
* [점수 API 저장소](https://github.com/ShinJaehun/stovegamejam_theroadiwalk_score_api)

## 담당 역할

이 프로젝트에서 신재훈은 게임 전체가 아니라, 온라인 점수 집계 API를 담당했습니다.

담당한 작업은 다음과 같습니다.

* Rails 기반 점수 API 서버 구현
* 플레이어 이름과 점수 저장 구조 설계
* 점수 목록 조회 API 구현
* 개별 점수 조회 API 구현
* 최고 점수 조회 API 구현
* 게임 클라이언트에서 호출할 수 있는 JSON API 구성

## 주요 기능

* 점수 등록

  * 게임 클라이언트에서 플레이어 이름과 점수를 서버로 전송합니다.
  * 서버는 이름과 점수를 저장합니다.

* 점수 목록 조회

  * 저장된 점수 기록을 JSON 형태로 조회할 수 있습니다.

* 최고 점수 조회

  * 가장 높은 점수 기록을 조회할 수 있습니다.
  * 같은 점수라면 더 나중에 등록된 기록을 우선하도록 구성했습니다.

* 게임 본체와 API 분리

  * 게임 클라이언트와 서버 API를 분리했습니다.
  * 게임잼 프로젝트 안에서 클라이언트와 백엔드 역할을 나누어 협업했습니다.

## API 구조

점수 API는 Rails API 서버로 만들었습니다.

기본 네임스페이스는 다음과 같습니다.

```text
/api/v1
```

주요 엔드포인트는 다음과 같습니다.

```text
GET    /api/v1/user_scores
POST   /api/v1/user_scores
GET    /api/v1/user_scores/:id
PATCH  /api/v1/user_scores/:id
PUT    /api/v1/user_scores/:id
DELETE /api/v1/user_scores/:id
GET    /api/v1/get_high_score
```

저장되는 데이터는 단순합니다.

```text
name  : string
score : integer
```

## 기술 스택

* Ruby
* Ruby on Rails
* SQLite
* Active Model Serializers
* JSON API
* Game Jam Backend

## 개발 과정

내가 걷는 길은 제한된 시간 안에 완성해야 하는 게임잼 프로젝트였습니다.

게임 본체는 팀으로 제작했고, 신재훈은 온라인 점수 집계 기능을 맡았습니다. 게임잼에서는 화려한 서버 구조보다, 게임 클라이언트가 바로 호출할 수 있는 단순하고 안정적인 API가 중요했습니다.

그래서 이름과 점수를 저장하는 최소한의 데이터 모델을 만들고, 점수 등록, 목록 조회, 개별 조회, 최고 점수 조회 기능을 Rails API로 구현했습니다.

이 프로젝트는 규모가 큰 백엔드 프로젝트는 아니지만, 게임 클라이언트와 서버 API를 분리하고, 게임 플레이 결과를 온라인으로 저장하는 흐름을 직접 구현했다는 점에서 의미가 있습니다.

## 현재 상태

* 2022 스토브 온라인게임잼 출품작
* 게임 본체는 팀 프로젝트로 제작
* 신재훈은 온라인 점수 집계 API 담당
* Rails 기반 점수 API 저장소 보관 중
* 현재는 게임잼 기록 보존용 프로젝트로 보관

## 앞으로의 개선 방향

* 게임 본체 실행 방법 정리
* 게임 스크린샷과 플레이 영상 추가
* 점수 API 배포 방법 정리
* 게임 본체와 API 연동 방법 문서화
* 상위 랭킹 API 추가
* CORS 설정 정리
* 점수 검증 로직 추가
* API 테스트 코드 추가

## 저작권

* 내가 걷는 길은 2022 스토브 온라인게임잼 출품작입니다.
* 게임 본체는 팀 프로젝트 결과물입니다.
* 신재훈은 온라인 점수 집계 API 부분을 담당했습니다.
