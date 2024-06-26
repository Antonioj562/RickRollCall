# Web Development Project 4 - *RickRollCall*

Submitted by: **Antonio Loyola**

This web app: **Learn more about the Rick and Morty universe by discovering all types of different characters. I wanted to continue learning about more APIs thus included a random Kanye West quote API**

Time spent: **13** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [ ] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [x] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/H3UfNYj' title='RickRollCallExample' width='100' alt='Video Walkthrough' />

GIF created with ...  
**[ScreenToGif](https://www.screentogif.com/) for Windows**


## Notes

I first had issues with rerendering the BanList and updaing the rerenders. I hhad to use chatgpt but after frequent annoyance I had to combine with what I found from the documentation and chatGPT to get map, item, index to display the banList which applies for rerender. And able to handle the onclick functions properly while learning more how to manipulate useStates.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.