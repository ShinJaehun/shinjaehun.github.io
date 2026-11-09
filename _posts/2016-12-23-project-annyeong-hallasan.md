---
layout: post
title: 안녕한라산 (AnnyeongHallasan)
info: 제주 중산간 도로 통제 정보와 한라산 탐방로 날씨를 제공하던 Android 앱
tech: Android / Java / ContentProvider / SyncAdapter / CursorLoader / Jsoup
type: personal
---

안녕한라산은 제주 한라산 방문객을 위해 만든 Android 앱입니다.

제주 시내 날씨가 괜찮아 보여도 겨울철 한라산 중산간 도로는 결빙되거나 통제되는 일이 자주 있습니다. 안녕한라산은 한라산을 찾는 사람들이 도로 통제 상황과 탐방 관련 날씨 정보를 더 쉽게 확인할 수 있도록 만든 앱입니다.

## 개발 과정

안녕한라산은 한라산 방문 전 도로 통제 상황과 날씨 정보를 더 쉽게 확인할 수 있으면 좋겠다는 생각에서 만든 앱입니다.

제주도는 시내와 중산간, 한라산 주변의 날씨 차이가 큽니다. 특히 겨울철에는 시내에서는 괜찮아 보여도 한라산으로 올라가는 도로가 결빙되거나 통제되는 일이 생길 수 있습니다. 이 앱은 그런 상황을 사용자에게 더 직관적으로 알려주기 위해 만들었습니다.

도로 통제 정보는 웹에서 가져와 로컬 DB에 저장하고, 도로별 통제 여부를 지도 이미지 위에 표시했습니다. 통제된 도로는 깜빡이는 애니메이션으로 보여주어 사용자가 한눈에 알아볼 수 있도록 했습니다.

날씨 정보는 한라산 주변 지점별로 보여주고, 각 항목을 누르면 상세 날씨 정보를 확인할 수 있도록 구성했습니다.

## 프로젝트 페이지

* [GitHub 저장소](https://github.com/ShinJaehun/AnnyeongHallasan)

## 도로 통제 상황과 날씨

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_annyeong_hallasan/hallasan01.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_annyeong_hallasan/hallasan01.png' | relative_url }}" alt="중산간 도로가 정상 운행 중일 때의 한라산 날씨 화면" loading="lazy"></a>
    <p><strong>정상 운행</strong> — 도로 통제가 없는 상태의 지도와 한라산·어리목·영실·성판악·관음사·돈내코 주변 날씨를 확인할 수 있습니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_annyeong_hallasan/hallasan02.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_annyeong_hallasan/hallasan02.png' | relative_url }}" alt="눈으로 평화로·번영로·1100도로가 통제된 상황을 지도에 표시한 화면" loading="lazy"></a>
    <p><strong>눈으로 인한 도로 통제</strong> — 평화로·번영로·1100도로가 통제된 상황을 지도 위의 색상 표시로 알려줍니다. 앱에서는 통제된 도로를 깜빡이는 방식으로 강조했습니다.</p>
  </div>
</div>

지도에서 도로 상황을 빠르게 확인하고, 화면 아래에서는 주요 탐방 지점의 날씨와 기온을 함께 살펴볼 수 있도록 구성했습니다. 날씨 항목을 선택하면 상세 정보도 확인할 수 있습니다.

## 개발 기록

2016년 말부터 2017년에 걸쳐 **Java 기반 Android 앱**으로 개발했습니다. 웹에서 수집한 도로 통제 정보와 날씨 정보를 로컬에 저장하고, `SyncAdapter`와 `ContentProvider`, `CursorLoader`를 이용해 갱신된 정보를 화면에 반영했습니다.

현재는 오래된 Android 개발 환경과 외부 정보 수집 방식 때문에 정상 동작을 보장하기 어렵습니다. 당시의 구현 구조와 자세한 기술 설명은 [GitHub README](https://github.com/ShinJaehun/AnnyeongHallasan#readme)에 남겨 두었습니다.

## 저작권

* 안녕한라산은 신재훈이 만들었습니다.
* 안녕한라산은 GNU GPL을 따릅니다.
