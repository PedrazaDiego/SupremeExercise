# The Supreme Exercise

<img src='https://i.imgur.com/6R5hlDO.png' width='50%'><img src='https://i.imgur.com/aC7fBpJ.png' width='50%'>

## To get started
To get started you can:
* Clone this repository
* Change directory on your local machine
* Run 'npm i' to install dependencies and then 'npm start' to run the code in your browser
```
    npm i
    npm start
```

## Tasks
- [x] Frontend Foundation
- [x] Basic Visualization

## Questions 
These are some of the questions I asked myself going into the exercise. The idea of this section is to try to showcase my thought process

* How much refactoring should I do?

    => I wanted to make the Section and Data components as reusable as possible, however, I realized using D3 would take more time and effort so I tried focusing on data visualization. Knowing I can go back and refactor.

* How can I get the total number of votes per justice?

    => This I struggle with. While my first thought was to iterate through all the cases and get the number of cases where justices had voted, I realized the time complexity would exponentially increase. So instead I decided to get the number of cases between the starting date and the finishing date of said justice, using the argument date property in each case to filter. This caused an issue however, cases with an argument date of null were not taken into count. I settled for this thinking that reducing time complexity would be worth it, and I could look for another way to include cases without an argument date in the count.

* D3? 

    => While I already had some interest in learning about d3, this was the first time I had a chance to implement it. Without a strong base knowledge of SVG, getting the basics was a bit difficult. I relied on d3 documentation, videos, trial, and errors to start drawing something. I started with a square, then y-and x-axis, then domain and range, then inputting data, and finally changing stuff to understand behaviors. 

## Sources

[Guidelines](https://docs.google.com/document/d/1MRF2sornPj4fb3d7PKRm-fUHvVNe53_lCBmoaZCUooE/edit)

[Figma](https://www.figma.com/file/UcLHxrcCWbHETMRslCREAL/The-Supreme-Exercise-Diego-Pedraza?node-id=0%3A1)

[Docs](https://d3-graph-gallery.com/scatter.html)

[Video](https://www.youtube.com/watch?v=00pzxH7YjYY&ab_channel=EdRoh)