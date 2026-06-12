---
layout: post
title: codex_review
info: Codex 작업 결과를 검토하고 정리하기 위한 Bash 기반 보조 도구
tech: Bash / Git / SSH / SCP / Codex CLI
type: personal
---

## codex_review

codex_review는 Codex CLI와 ChatGPT 웹 인터페이스를 함께 사용하는 작업 흐름에서 **작업 명세, 구현 결과, diff, 파일 본문을 안정적으로 주고받기 위한 Bash 기반 보조 도구**입니다. 코딩 머신에서는 Codex CLI로 구현을 진행하고, 리뷰·설계 머신에서는 ChatGPT 웹 인터페이스로 diff와 파일 내용을 검토하는 방식에 맞춰 만들었습니다. 단순히 파일을 복사하는 도구가 아니라, `spec → 구현 → review → 토론` 흐름을 일정한 형식으로 유지하는 것을 목표로 합니다.

## 프로젝트 페이지

* [GitHub 저장소](https://github.com/ShinJaehun/codex_review)

## 주요 특징

* spec 중심 작업 흐름

  * 작업 전 `spec.md`를 기준으로 오늘의 작업 범위를 정합니다.
  * `pull_spec` 명령으로 원격의 작업 명세를 로컬 프로젝트 루트로 가져올 수 있습니다.
  * 하나의 `spec.md`를 현재 작업의 기준 문서로 사용합니다.

* Git diff 기반 리뷰 패킷 생성

  * `make_review`는 특정 commit 또는 ref range의 review 파일을 만듭니다.
  * review 파일에는 commit 메시지, log, stat, diff가 함께 들어갑니다.
  * 단순히 “무엇이 바뀌었는지”가 아니라 “왜 바꿨는지”를 commit 메시지와 함께 볼 수 있도록 구성했습니다.

* review 파일 전송

  * `send_review`는 `make_review`로 생성한 review 파일을 원격 리뷰 머신으로 전송합니다.
  * SSH와 SCP를 사용합니다.
  * 코딩 머신에서 작업한 결과를 웹 인터페이스가 있는 머신으로 옮겨 검토할 수 있습니다.

* 파일 본문 dump 생성

  * `send_dump`는 특정 디렉토리의 파일 본문을 하나의 텍스트 파일로 묶어 전송합니다.
  * diff만으로 맥락을 파악하기 어려울 때 사용합니다.
  * 특정 디렉토리 제외, 탐색 깊이 제한 같은 옵션을 제공합니다.

* review와 dump의 역할 분리

  * `send_review`는 Git 기준 변경사항을 전달합니다.
  * `send_dump`는 파일시스템 기준 현재 본문을 전달합니다.
  * 변경 내역을 볼 때와 전체 맥락을 볼 때를 구분해 사용할 수 있습니다.

## 기본 사용 흐름

1. 리뷰·설계 머신에서 작업 명세를 작성합니다.
2. 코딩 머신에서 `pull_spec`로 `spec.md`를 가져옵니다.
3. Codex CLI가 `spec.md`를 기준으로 구현합니다.
4. 작업을 commit합니다.
5. `send_review HEAD` 또는 `send_review main...feature-branch`로 review 파일을 만듭니다.
6. 필요한 경우 `send_dump app/controllers`처럼 파일 본문도 함께 전달합니다.
7. ChatGPT 웹 인터페이스에서 review 또는 dump 내용을 바탕으로 검토합니다.
8. 검토 결과를 다음 작업 명세에 반영합니다.

## 명령어 구성

* `pull_spec`

  * 원격의 `spec.md`를 로컬 프로젝트 루트로 가져옵니다.
  * 현재 작업의 기준 문서를 동기화할 때 사용합니다.

* `make_review`

  * 특정 commit 또는 ref range를 기준으로 review 파일을 생성합니다.
  * commit 메시지, log, stat, diff를 한 파일에 정리합니다.

* `send_review`

  * `make_review`를 실행한 뒤 생성된 review 파일을 원격 머신으로 전송합니다.
  * commit 단위 검토나 브랜치 diff 검토에 사용합니다.

* `send_dump`

  * 특정 디렉토리의 파일 본문을 하나의 dump 파일로 묶어 전송합니다.
  * diff보다 전체 파일 맥락이 필요할 때 사용합니다.

## 기술 스택

* Bash
* Git
* SSH
* SCP
* find
* diff
* Codex CLI
* ChatGPT 웹 인터페이스

## 개발 과정

codex_review는 Codex CLI를 실제 개발 흐름에 적용하면서 만든 개인 보조 도구입니다. 처음에는 코딩 머신과 리뷰·설계 머신을 분리해 사용하는 과정에서 commit diff를 더 정확하게 전달하기 위한 작은 스크립트로 시작했습니다. 이후 작업 명세를 가져오는 `pull_spec`, Git diff를 정리하는 `make_review`, review 파일을 전송하는 `send_review`, 현재 파일 본문을 전달하는 `send_dump`로 역할을 나누며 도구 세트로 정리했습니다. 이 프로젝트는 ChatGPT나 Codex가 작성한 결과를 그대로 믿기보다, **작업 명세와 diff를 기준으로 사람이 다시 검토할 수 있는 흐름**을 만드는 데 초점을 둡니다. 구현 결과를 commit 메시지, stat, diff, 파일 본문으로 나누어 확인하면, 작업 의도와 실제 변경 사항을 더 객관적으로 점검할 수 있습니다.

## 현재 상태

* `pull_spec` 기반 작업 명세 동기화 지원
* `make_review` 기반 Git review 파일 생성 지원
* `send_review` 기반 review 파일 전송 지원
* `send_dump` 기반 파일 본문 dump 전송 지원
* SSH/SCP 기반 머신 간 파일 전달 구조 구현
* Codex CLI + ChatGPT 웹 인터페이스 병행 작업 흐름에서 사용 중

## 앞으로의 개선 방향

* 설정 파일 검증 강화
* review 파일 형식 옵션 추가
* 특정 파일 diff만 추출하는 기능
* dump 대상 파일 필터 개선
* 전송 전 미리보기 기능
* 프로젝트별 설정 profile 지원
* review 파일 자동 정리 기능
* 실패 상황에 대한 에러 메시지 개선

## 저작권

* codex_review는 신재훈이 만들었습니다.
* codex_review는 GNU GPL을 따릅니다.
