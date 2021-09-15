import Project from "../models/project";
import lockerImage from "../images/thumbnails/locker_thumb.png";
import blindsImage from "../images/thumbnails/blinds_thumb.png";
import catImage from "../images/thumbnails/cat_thumbnail.png";

const ProjectData = [
  new Project(
    "1",
    "Automated Smart Locker System",
    "An automated locker system designed for the FAU library that is equipped with a Raspberry Pi, touch-screen kiosk interface, a QR-code scanner, \
    and solenoid locks. The lockers can be interacted with as an Administrator by using the accompanying web application which allows orders to be \
    created/automatically assigned to available lockers.",
    "An automated locker system designed for the FAU library that is equipped with a Raspberry Pi, touch-screen kiosk interface, a QR-code scanner, \
    and solenoid locks. The lockers can be interacted with as an Administrator by using the accompanying web application which allows orders to be \
    created/automatically assigned to available lockers. Automatically generated emails alert the customer of their order status and include their numerical \
    and QR access codes. It also keeps track of the status of each locker through a JavaScript-based interactive page and saves past orders separately.\
    no orders are present in the database (say, overnight), there is no charge.\
    As a full stack developer for this project, I worked on the input form UI, JavaScript interactive UI, and managing the AWS database. \
    As the Project Manager, meetings were conducted weekly to update the client on the project’s progress, and meetings were coordinated with the client and \
    librarians to receive and implement feedback on the design. \
    The frontend of the web app was created with HTML/CSS/JavaScript, while the backend consisted of PHP, AJAX, and MySQL to interact with the database.",
    lockerImage,
    "https://www.youtube.com/watch?v=KeJDtqZYt7c"
  ),
  new Project(
    "2",
    "Automated Smart Shutter System",
    "A panel of plantation shutters is remotely/automatically adjusted \
    using an SG90 servo motor attached to a shutter axis. The angle of \
    the shutter blades is dependent on the light and heat levels inside \
    and outside. For example. to prevent the inside of the house from \
    heating upduring hot weather, the blinds will automatically shut.",
    "The angle of a section of plantation shutters is modulated based on \
    input from four total sensors: two light sensors, and two temperature sensors. \
    these four sensors, plus the SG90 servo and a keypad are connected to a central \
    microprocessor, an MSP430 launchpad. A program written in C++ (using arduino libraries) \
    reads inputs from the sensors to automatically control the angle of the shutters, which \
    will typically try to open when it is light out, but will close over time if the inside \
    is warming up. Otherwise, there is a manual mode which allows the user either set the \
    blinds to open or closed.",
    blindsImage,
    "https://www.youtube.com/watch?v=Cc9OCkZNTVs"
  ),
  new Project(
    "3",
    "R-CNN Deep Learning Network for Object Detection",
    "By far my most important project, I developed a Region Based Convolutional Neural Network \
    to detect cats in images. Now, if you're unsure what you're looking at is a cat, simply consult \
    this neural network to find out.",
    "This program, created using MATLAB, was a proof of concept for possible future Computer Vision \
    related projects. An R-CNN is trained by being fed several normal and augmented ground truth photos for training, and then \
    tested by having it pin the cat on unlabled photos. Using the trained R-CNN, the program will attempt to label the area, \
    if such an area exists, which mostly resembles a cat. Along with this label will be a confidence score which reflects \
    how much the labeled area resembles a cat.",
    catImage,
    null
  ),
];

export default ProjectData;