<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lieuk1/Streaming-Availability">
    <img src="public/readme-logo.png" alt="Logo" width="64" height="64">
  </a>
  
  <h3 align="center"><strong>Stream Mite</strong></h3>
  <p>
    <p>A simple and free streaming availability lookup tool</p>
    <a href="https://github.com/lieuk1/Streaming-Availability"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#usage">View Demo</a>
    -
    <a href="https://github.com/lieuk1/Streaming-Availability/issues">Report Bug</a>
    -
    <a href="https://github.com/lieuk1/Streaming-Availability/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

**Stream Mite** is an application whose purpose is to make it easier for content consumers to view the streaming availability of a TV show or movie. 

Sometimes the unnecessary and excess content that is shown to the user hinders their ability to view a title’s streaming availability quickly, which this application aims to solve.



### Built With

* [React.js](https://reactjs.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Watchmode API](https://api.watchmode.com/)
* [OMDb API](https://www.omdbapi.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free [Watchmode API key](https://api.watchmode.com/) 
2. Get a free [OMDb API key](https://www.omdbapi.com/)
3. Clone the repo
   
   ```sh
   git clone https://github.com/lieuk1/Streaming-Availability.git
   ```
4. Install NPM packages
   
   ```sh
   npm install
   ```
5. Create a `.env` file in the root project directory (often the same folder as `.gitignore` and `README.md`)
6. Enter your API keys in `.env`
   
   ```.env
   REACT_APP_WATCHMODE_API_KEY=YOUR_KEY
   REACT_APP_OMDB_API_KEY=YOUR_KEY
   ```
7. Add `.env` to the end of the `.gitignore` file
   
   ```.gitignore
   # api keys
   .env
   ```
   Ensure your API keys are not uploaded to GitHub!



<!-- USAGE EXAMPLES -->
## Usage

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- ROADMAP -->
<!-- ## Roadmap -->

<!-- - [] Feature 1
- [] Feature 2
- [] Feature 3
    - [] Nested Feature -->

<!-- See the [open issues](https://github.com/lieuk1/Streaming-Availability/issues) for a full list of proposed features (and known issues). -->

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "major enhancement" or "minor enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/lieuk1/Streaming-Availability/blob/main/LICENSE.txt) for more information.



<!-- CONTACT -->
## Contact

Kristella Lieu - lieuk1@tcnj.edu

Project Link: [https://github.com/lieuk1/Streaming-Availability](https://github.com/lieuk1/Streaming-Availability)



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Television](https://icons8.com/icon/fbAvklUk7Ckm/television) icon by [Icons8](https://icons8.com)
* [Semantic UI](https://semantic-ui.com/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/lieuk1/Streaming-Availability.svg?style=for-the-badge
[contributors-url]: https://github.com/lieuk1/Streaming-Availability/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lieuk1/Streaming-Availability.svg?style=for-the-badge
[forks-url]: https://github.com/lieuk1/Streaming-Availability/network/members
[stars-shield]: https://img.shields.io/github/stars/lieuk1/Streaming-Availability.svg?style=for-the-badge
[stars-url]: https://github.com/lieuk1/Streaming-Availability/stargazers
[issues-shield]: https://img.shields.io/github/issues/lieuk1/Streaming-Availability.svg?style=for-the-badge
[issues-url]: https://github.com/lieuk1/Streaming-Availability/issues
[license-shield]: https://img.shields.io/github/license/lieuk1/Streaming-Availability.svg?style=for-the-badge
[license-url]: https://github.com/lieuk1/Streaming-Availability/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/krystelle-lieu-aa4110148/
[product-screenshot]: images/screenshot.png
