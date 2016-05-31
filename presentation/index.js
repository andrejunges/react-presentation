// Import React
import React from "react";

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
              { loc: [0, 1] },
              { loc: [2, 6] }, //, title: "Importing react / Creating an array.."
              { loc: [7, 17] }, //, title: "Creating the ES6 component / Constructor"
              { loc: [18, 30] }, //, title: "Creating the item elements by mapping through the list."
              { loc: [19, 22] },
              { loc: [23, 29] }, // render return
              { loc: [31, 35] }, // addEvent()
              { loc: [37, 42] }, //, title: "Item Component"
              { loc: [43, 48] },
              { loc: [49, 52] },
              { loc: [53, 60] },
              { loc: [61, 69] },
              { loc: [70, 72] },
            ]} />


          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Benefits</Heading>
            <List>
              <Appear><ListItem>JSX</ListItem></Appear>
              <Appear><ListItem>Server side rendering</ListItem></Appear>
              <Appear><ListItem>Hot Reload</ListItem></Appear>
              <Appear><ListItem>Devtools</ListItem></Appear>
            </List>
          </Slide>


          <Slide transition={["slide"]} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
