// Import React
import React from "react";
import TodoList from "./TodoList";
// https://jsfiddle.net/69z2wepo/45085/
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reactLogo: require("../assets/reactjs-logo.png"),
  reactDOM: require("../assets/react-image.png"),
  reactDevtools: require("../assets/react-devtools.png"),
  reactNative: require("../assets/react-native.png"),
  reactNativeBridge: require("../assets/react-native-bridge.png"),
  reactNativeGif: require("../assets/react-native-hot-reload.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "#039BE5",
  secondary: "#607D8B"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="#333">
            <Layout style={{alignItems: "center"}}>
              <Fill>
                <Heading size={1} caps lineHeight={1} textColor="#FFF">React</Heading>
              </Fill>
              <Fill>
                <Image src={images.reactLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
              </Fill>
            </Layout>
            <Text textSize="1.2em" textAlign="left" textColor="#FFF" margin="20px 0px 0px" bold>André Junges</Text>
            <Text textSize="1.2em" textAlign="left" textColor="#FFF" margin="10px 0px 0px" bold>Eduardo Rost</Text>
            <Text textSize="1.2em" textAlign="left" textColor="#FFF" margin="10px 0px 0px" bold>Fabiano Menegussi</Text>
            <Text textSize="1.2em" textAlign="left" textColor="#FFF" margin="10px 0px 0px" bold>Renan Santos</Text>
          </Slide>


          <Slide transition={["slide"]} bgColor="#333">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="#FFF">Why?</Heading>
            <BlockQuote>
              <Quote textColor="#FFF">We built React to solve one problem: <b>building large applications with data that changes over time.</b></Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Basics</Heading>
            <Layout>
              <Fill>
                <List>
                  <Appear>
                    <ListItem>
                      <Text textColor="primary">M<Code style={{backgroundColor: "none"}} textSize="1.4em" textColor="green">V</Code>C</Text>
                    </ListItem>
                  </Appear>
                  <Appear><ListItem>Declarative</ListItem></Appear>
                  <Appear><ListItem>Virtual DOM</ListItem></Appear>
                  <Appear><ListItem>One way data flow</ListItem></Appear>
                </List>
              </Fill>
              <Fill>
                <Appear>
                  <Image src={images.reactDOM.replace("/", "")} margin="0px auto 40px" />
                </Appear>
                <Appear>
                  <Text textColor="#FFF" textSize="1.8em">f(data) = View</Text>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            textSize=".6em"
            code={require("raw!../assets/todo-example")}
            ranges={[
              { loc: [0, 1], title: "Importing React" },
              { loc: [2, 30] }, //TodoList Component
              { loc: [4, 12], title: "Contructor Method" },
              { loc: [13, 25], title: "Render Method" },
              { loc: [14, 17] }, //Creating TodoItem by mapping through the list
              { loc: [18, 24] },
              { loc: [26, 29], title: "addEvent Method" },
              { loc: [31, 36], title: "TodoItem Component" },
              { loc: [37, 72] }, //NewTodoItem Component
              { loc: [39, 47] }, //Contructor Method
              { loc: [48, 51] }, //componentDidMount
              { loc: [52, 63] }, //render
              { loc: [64, 69] }, //onChange
              { loc: [70, 75] }, //onSubmit
              { loc: [77, 78], title: "Rendering component in the DOM" },
            ]} />

          <Slide transition={["fade"]} bgColor="#f1f1f1" textColor="primary" align="flex-start">
            <TodoList />
          </Slide>


          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Benefits</Heading>
            <List>
              <Appear><ListItem>JSX</ListItem></Appear>
              <Appear><ListItem>Server side rendering</ListItem></Appear>
              <Appear><ListItem>Hot Reload</ListItem></Appear>
              <Appear><ListItem>Devtools</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Devtools</Heading>
            <Appear>
              <Image src={images.reactDevtools.replace("/", "")} margin="40px 0 0 0" />
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="#f1f1f1">
            <Layout style={{alignItems: "center"}}>
              <Fill>
                <Heading size={1} caps lineHeight={1} textColor="#333">React Native</Heading>
              </Fill>
              <Fill>
                <Image src={images.reactNative.replace("/", "")} margin="0px auto 40px" height="293px"/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#f1f1f1" textColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="#333">React Native</Heading>
            <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
              <Fill>
                  <List>
                    <Appear><ListItem>Free, open source</ListItem></Appear>
                    <Appear><ListItem>Flexbox layout</ListItem></Appear>
                    <Appear><ListItem>Same skill-set, similar APIs</ListItem></Appear>
                    <Appear><ListItem>Share common code - (87%*)</ListItem></Appear>
                    <Appear><ListItem>Native UI Components</ListItem></Appear>
                    <Appear><ListItem>OTA Updates</ListItem></Appear>
                  </List>
              </Fill>
              <Fill>
                <Appear>
                    <Image src={images.reactNativeBridge.replace("/", "")} margin="0px auto" height="180px"/>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["spin"]} bgColor="#f1f1f1" textColor="primary">
                <Text textColor="#333" textSize="2.2em">Hot Reloading</Text>
                <Appear>
                    <Image src={images.reactNativeGif.replace("/", "")} margin="50px auto" height="400px"/>
                </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="#333">
            <BlockQuote>
              <Quote textColor="#FFF">"Learn once write anywhere."</Quote>
            </BlockQuote>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
