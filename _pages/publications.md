---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 1
scholar:
  group_by: none
  sort_by: year
  order: descending
---

[Google Scholar](https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }})

<div class="publications">
  <section aria-labelledby="intelligence-physical-systems">
    <h2 class="publication-category" id="intelligence-physical-systems">Intelligence &amp; Physical Systems</h2>
    {% bibliography --query @*[research_area=physical_systems]* %}
  </section>
  <section aria-labelledby="robotics-embodied-ai">
    <h2 class="publication-category" id="robotics-embodied-ai">Robotics &amp; Embodied AI</h2>
    {% bibliography --query @*[research_area=robotics]* %}
  </section>
</div>
