---
layout: gallery
title: Work
#permalink: /gallery
permalink: /
redirect_from:
  - /gallery
order: 1
---

{% assign image_files = site.static_files | where: "image", true %}

{% for myimage in site.data.gallery-items %}
    {% include gallery_item.html path=myimage.filename title=myimage.title description=myimage.description %}
    <figcaption>
{% endfor %}

