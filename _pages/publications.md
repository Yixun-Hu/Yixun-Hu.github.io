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
    <section aria-labelledby="ai-for-science">
      <h3 class="publication-subcategory" id="ai-for-science">AI for Science</h3>
      {% bibliography --query @*[research_topic=ai_for_science]* %}
    </section>
    <section aria-labelledby="bio-inspired-computing">
      <h3 class="publication-subcategory" id="bio-inspired-computing">Bio-inspired Computing</h3>
      {% bibliography --query @*[research_topic=bio_inspired_computing]* %}
    </section>
  </section>
  <section aria-labelledby="robotics-embodied-ai">
    <h2 class="publication-category" id="robotics-embodied-ai">Robotics &amp; Embodied AI</h2>
    {% bibliography --query @*[research_area=robotics]* %}
  </section>
</div>
