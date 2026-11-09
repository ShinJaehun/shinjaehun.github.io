---
layout: post
title: 오름올라 (OreumOla)
info: 제주 오름 GPS 트래킹 및 루트 기록 앱
tech: Android Native / Kotlin / Kakao Map SDK / Room / Hilt
type: personal
---

오름올라는 제주 오름을 탐방하면서 **GPS로 걸은 경로를 기록하고, 카카오 지도 위에서 탐방 기록을 확인하는 안드로이드 앱**입니다. 제주 오름의 자연환경을 훼손하는 안내 시설을 늘리기보다 누군가 직접 걸어서 남긴 디지털 경로 정보를 공유하여 탐방에 활용하자는 생각에서 출발했습니다.

## 프로젝트 페이지

* [GitHub 저장소](https://github.com/ShinJaehun/OreumOla)

## 탐방 기록

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_oreumola/OO02.jpg' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_oreumola/OO02.jpg' | relative_url }}" alt="사라봉과 별도봉 탐방 경로를 표시한 기록 목록" loading="lazy"></a>
    <p><strong>사라봉·별도봉</strong> — 실제 이동 경로를 지도 위에 빨간 선으로 표시하고, 날짜와 소요 시간·거리·평균 속도·소모 칼로리를 함께 보여줍니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_oreumola/OO01.jpg' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_oreumola/OO01.jpg' | relative_url }}" alt="삼의악 탐방 경로를 표시한 기록 목록" loading="lazy"></a>
    <p><strong>삼의악</strong> — 오름을 걸으며 기록한 GPS 경로를 저장해 두었다가 날짜별 목록에서 다시 확인할 수 있습니다.</p>
  </div>
</div>

위 화면은 **트래킹을 마친 뒤 저장된 기록 목록**입니다. 트래킹 진행 중에는 GPS 위치를 수집해 카카오 지도 위에 이동 경로를 그립니다. 기록을 종료하면 지도 이미지와 탐방 통계가 함께 저장됩니다.

## 개발 현황

Kotlin으로 개발했으며, **Kakao Map SDK**로 지도와 이동 경로를 표시하고 **Room** 데이터베이스에 탐방 기록을 저장합니다. 백그라운드에서도 위치 추적을 유지하도록 Foreground Service를 사용했습니다.

현재는 **개인 GPS 트래킹과 탐방 기록 저장**이 중심입니다. 장기적으로는 여러 탐방자가 기록한 오름 경로를 공유하고 참고할 수 있는 서비스로 확장하는 것을 구상하고 있습니다. 아직 사용자 간 경로 공유 기능이 구현된 것은 아닙니다.

구체적인 구조와 구현 내용은 [GitHub README](https://github.com/ShinJaehun/OreumOla#readme)에 정리했습니다.

## 저작권

* 오름올라는 신재훈이 만들었습니다.
* 오름올라는 GNU GPL을 따릅니다.