import React from "react"


const TopicsPage = (props) => {
    return (
        <>
            <h2>Web Development Concepts</h2>
<nav class="local">
    <a href="#servers">Web Servers</a>
    <a href="#design">Frontend Design</a>
    <a href="#optimization">Optimizing Images</a>
    <a href="#favicons">Favicons</a>
    <a href="#css">Cascading Stylesheets</a>
    <a href="#forms">Forms</a>
    <a href="#express">Express</a>
    <a href="#dataTypes">Data Types</a>
</nav>
<article id="servers">
    <h3>Web Servers</h3>
    <p>
        Most <strong>web servers</strong> are configured such that the <strong>request</strong> that follows the <strong>host name</strong>
        is mapped to find the index.html file as the resource. This is called the <strong>designated homepage</strong>.
        It is kind of like a default parameter that is put in place if you do not include a path to the resource you are
        looking for. The index.html file in the root directory is considered the homepage of the web app, and the web app is configured
        to return this file whenever a <strong>GET</strong> request is received.
        One example is the Apache web server that Oregon State University uses. It uses the default index.html file.
        Another example would be Microsoft's .NET platform, in which the default.html is allowed as the homepage.
        Other examples could be when different languages for web development are used, such as JavaScript or PHP. Then the server
        may look for index.js or index.php as the homepage.
    </p>

    <p>
        When viewing from the web server, there are more files listed. There is only index.html, main.css and main.js on the local version.
        The method listed on the web server is <strong>GET</strong>. This means that there is a request for information processed.
        On the web server version, I see a document file (a1-bickhamw/) as well as the main.css and main.js. There is also a styles.css file and favicon.ico file, 
        as well as a few others, but I won't list them.
        There is no <strong>remote address</strong> in the general header on the local file, but it does show a remote address when viewed from the web server.
        The <strong>response header</strong> from the local viewing shows much less information. They both show last modified and the content-type, but the web server
        also shows me the type of <strong>server (Apache)</strong>. For the <strong>request headers</strong>, I get a warning label for <em>Provisional headers are shown</em> 
        when viewing it locally. This is not the case when viewing it from the web server. The request headers for the web server show me more information.
        Such as the cookies, host server, platform, etc.
    </p>

    <p>
        The favicon.ico shows 200 as its <strong>status code</strong> because it was found. This indicates that the request
        was processed successfully. The main.css and main.js files show a status of 404 because they are not found on the server 
        during the request. Thus, returning an error status code of 404.
    </p>

    <p>
        In my web server's <strong>URL</strong>, the <strong>scheme</strong> is HTTPS. The <strong>subdomains</strong> are web and engr (web.engr.) and the <strong>host domain</strong> 
        is oregonstate.edu.
        The <strong>resources</strong> pointed to are first to my ONID username and then to the file a1-bickhamw, which contains this file you are currently
        looking at.
    </p>
</article>

<article id="design">
    <h3>Frontend Design</h3>
    <p>
        <strong>Frontend design</strong> focuses around creating the most appropriate experience for users. It consists of a visual design, 
        a <strong>graphical user interface</strong>, also known as a GUI, and an interactive experience. The <strong>visual design</strong> consists of a 
        consistent color, font, and typography scheme. It also contains a photography, icon, illustration scheme and finally
        navigation systems that make sense.
    </p>

    <p>The Five E's of Frontend Design</p>
    <dl>
        <dt><strong>Effective</strong></dt>
        <dd>The website helps users to complete their goal.</dd>
        <dt><strong>Efficient</strong></dt>
        <dd>The website enables users to complete a task simply and concisely.</dd>
        <dt><strong>Enjoyable</strong></dt>
        <dd>The website should present as an enjoyable website to use and fits the unique 
            needs of the industry and intended audience.
        </dd>
        <dt><strong>Extraneous Errors</strong></dt>
        <dd>There should be an absence of extraneous errors that would impede the user experience.</dd>
        <dt><strong>Easy</strong></dt>
        <dd>The website should allow new users to navigate the site easily.</dd>
    </dl>

    <p>
        For page layout tags, we will talk about six in particular. These include header, nav, main, section, article, and footer.
        The <strong>header</strong> denotes the banner for the website and will typically include the name, publisher, and a marketing slogan. The 
        header will usually remain the same for each page, ensuring that the user knows they are still on the same site. The current trend
         is to keep the header as small as possible so that the content shows above the scroll area in the viewport.
        
         The <strong>nav tag</strong> can be used multiple times across an app or site. Each block of navigation takes users from the current page to other
        pages. Sets of navigation frequently include the main menu, search, tools, stories, locations, and legal links. Each set can be 
        distinguished from one another by color, spacing, and other design changes.
        
        The <strong>main tag</strong> denotes the primary block that will hold content, such as stories, galleries, and tutorials.
        
        The <strong>section tag</strong> is used to make a thematic grouping of content. It is a group of content that is all relate but does not quite stand on its own.
        Usually the first item inside this tag is a h1 tag that describes what will be the focus of the section. If a good way to classify the content 
        is not present, then you may consider using an article tag instead. A section tag should be used only if all the content inside is related.
        
        The <strong>article tag</strong> is typically used within a section tag denoting a single specific topic with a second-level headline, represented by a h2 tag.
        When multiple article tags are used on a page in a section, they are typically assigned different <strong>ID selectors</strong> in order to be styled differently.
        The selectors serve a dual purpose in that they also help create a place for anchors to land when jumping internally on the page.
        
        The <strong>footer tag</strong> resides below the main tag and typically holds legal information, contact information, and links to critical pages. The very 
        least that a footer should contain is the website owner's copyright statement, which includes the copyright symbol.
    </p>

    <p>Linking to Other Content</p>
    <ol>
        <li>
            <strong>Anchors</strong> can link to an external source of content, which requires the URL to that source following the <strong>href attribute</strong>, 
            which is an example of an <strong>absolute path</strong>. An absolute path begins from the beginning of where a file is located. This can be from the hard 
            drive or the website URL. It makes no assumptions about where the file may be and instead starts from the beginning of the path.
            A description as to where the link will take the user inside the anchor tag.
        </li>
        <li>
            Anchors can also link to an internal part of the page requiring '#topic' following the href attribute utilizing the 
            ID selector. The name of the topic would then be placed within the anchor tag, ensuring that the user would know where
            the jump will take them.
        </li>
        <li>
            Anchors can also be used to link to other pages on the site. This is done by providing a <strong>relative path</strong> to the page following 
            the href attribute and a description of the page in the anchor tag. A relative path can be more efficient than an absolute path if the page to access is 
            near to that directory. This involves using dots to move backwards through a directory such as to a preceding folder and slashes to move into folders or 
            files. It should be noted that a single dot will stay in the same directory, whereas two or more will begin to move backwards out of the directory currently 
            accessed.
        </li>
    </ol>
</article>

<article id="optimization">
    <h3>Optimizing Images</h3>
    <p>
        There are six specifications for optimizing an image for the web. The first of which is giving the image a <strong>descriptive file name</strong>.
        This works to improve <strong>search engine optimization</strong>, or SEO, which helps search engine bots categorize the image so that users searching
        for related images might see the image. The key to a descriptive file name is including who, what, where, and when as much as possible. 

        The next specification for optimizing an image is to keep the file size as <strong>small</strong> as possible for the fastest load time. 
        You should give high resolution images only to high resolution
        devices. In order to decrease the size of a file, compression may be used. There is <strong>lossy</strong> compression which uses approximations to 
        discard some image data, which can result in pixelation. The other type of compression is <strong>lossless</strong>, which does not degrade visual quality.

        The third specification is to give the image the <strong>exact dimensions</strong> that the space of the website is allowing. This can be done by cropping and 
        reducing the size of the image. Failure to do so can cause the image to load very slowly.

        The fourth specification is to make sure that the image file is in the correct <strong>file format</strong>. Online photos are typically .JPG files, while
        line-art images like logos and icons are usually in .GIF and sometimes 8-bit .PNG format. Graphics with true transparency will need 24-bit .PNG.

        The fifth specification is to <strong>reduce the resolution</strong> of the image. Monitors will render between 72 or 300+ pixels per inch, also known 
        as ppi. The older default is 72ppi. Higher resolutions are available now so, in order to cover many options, providing multiple image sizes for each is 
        becoming the standard.

        The sixth and final specification for optimization is the <strong>color mode</strong> of the image. <strong>RGB</strong> is made up of 1, 2, or 3-digit values for red, 
        green, and blue. RGB is used for .PNG, .JPG, .SVG, and .WEBP. Indexed color mode is used for .GIF and sometimes .PNG.    
    </p>
    <p>
        There are five different file format types that are used for online images. For line art, the most common file formats for the web are .SVG, .GIF, and .PNG. 
        For photography, the common file formats are .JPG and WebP. 
        <strong>Scalable Vector Graphics</strong>, or SVGs, are mathematically-derived and marked with XML for two-dimensional, interactive, or animated images. They 
        don't necessarily rely on unique pixels and instead use vector data. This means that they can scale to any resolution, which makes them useful in web design.

        <strong>GIF</strong> files can have 8-bit transparency and/or animation. Their edges anti-alias to just a single background matte color. Most commonly, 
        GIFs are seen used in small animations and low-resolution clips. These types of files are saved in Indexed color mode.

        <strong>PNG</strong>, short for Portable Network Graphic, files have true transparency and are usually the best for biomorphic shapes, line art, and solid colors. 
        They can be placed over any variety of colors without distortion, and the background shows through any blank or transparent areas. The color mode of .PNG files 
        is typically RGB, but can also be compressed in Index color mode. If compression is done well, even a photo with line at can be saved in .PNG format, but it 
        will be pixelated. PNGs are considered the next evolution of GIFs for their expansion of color palette. However, GIFs still reign when it comes to animation.

        <strong>JPG</strong> files are only used for photographic images. Photos are typically taken containing millions of colors, great detail, and are commonly taken 
        on high resolution cameras, meaning that the files are often too big for the web. Resizing and compressing these images is a necessity to reduce the load 
        on the web server. This reduces their file size while keeping the image rectangular. Compression can be tricky, however, because while more compression reduces 
        the size of the file, it will also reduce the quality of the image.

        <strong>WebP</strong> files are typically only used for photographic images. They can compress down to small file sizes and remain rectangular. Like with .JPG's, 
        higher compression will yield lower image quality. Transparent backgrounds are possible, unlike JPGs, with this format with an alpha channel.
    </p>
</article>

<article id="favicons">
    <h3>Favicons</h3>
    <p>
        <strong>Favicons</strong> can be used to quickly identify a site in a browser tab, on a smartwatch, a large display, or a search engine's result list. This is done by using a 
        website, app, or company logo displayed in the correct size and file type. Favicon files can be saved in .GIF, .PNG, .ICO, and .SVG file formats. 
        A browser will pick up the files and will save the icon and anchor to a bookmark or favorites list, as well as a device screen or search engine results list.
        Favicons will be shown on a browser tab. Phones, tablets, IoT, and wearable devices can display favicons from applications and websites.
    </p>
</article>

<article id="css">
    <h3>Cascading Stylesheets</h3>
    <p>
        While the HTML markup will give a website or app basic structure and organization for its content, <strong>Cascading Style Sheets</strong>, or CSS, 
        will transform and likely enhance what HTML has given it. Examples would include improving the usability, readability, and legibility of the content
        that may be on the website or app. CSS also allows for the developer to adhere to brand design and requirements.
    </p>
    <p>
        In order to use CSS, there are five main ways that a developer can incorporate styles in their designs. 
        
        The first is linking to an <strong>external</strong> 
        stylesheet. This is done in the head area of a website by <strong>"linking"</strong> the stylesheet and providing a path to the sheet following the href attribute. 
        This will provide the styles linked to all the pages of the site.

        Another way of incorporating style is to import the file into the CSS file that is already in the directory being worked in. This is done using the 
        <strong>@import</strong> statement, followed by the path to the sheet that is to be imported. 

        The third way is to <strong>embed</strong> the HTML tag inside a style tag. This is done by then writing the typical CSS selectors and attributes to be styled 
        inside those style tags. 

        The fourth way is to write the style <strong>inline</strong> with the HTML tag that is to be styled. This is done by using the style keyword inside an HTML tag 
        and then writing the attributes and values to be added beside it. 

        Finally, JavaScript allows, through the <strong>Document Object Model</strong>, adding styles by searching for HTML elements. An example would be document.getElementsbyID('CSS').style.color = "red". 
        This would change the text color in this section to red.
    </p>
</article>

<article id="forms">
    <h3>Forms</h3>
    <p>There are six major goals when it comes to <strong>accessibility</strong> of forms. 
        
        The first goal is to provide <strong>clear instructions</strong> above the form and in its labels. This 
        is ensure that the user understands they need to write or select in the fields presented to them. 
        Placeholders can be helpful to users that have vision.

        The second is to let the users know <strong>why the data is being gathered</strong> and which fields are required. The 
        form cannot be submitted until the required fields are filled in with valid information. Data is 
        important information that shouldn't be shared lightly, thus it is important the user knows why it is 
        being collected.

        Next, the first field of the form should be set to <strong>autofocus</strong> so that users can start typing without 
        necessarily using their mouse. This can be essential for disabled users or users that struggle with 
        using a mouse.

        The fourth goal is to ensure that that <strong>form control</strong> can be filled in via the keyboard. 
        Some users will not have/not use a mouse or a trackpad.

        The fifth goal is to add <strong>tab indexing</strong> to complex forms. This ensures that users will 
        know the order in which the form should be filled out. It also further helps individuals that don't 
        use a mouse, since they can instead press tab on a keyboard to progress through the form.

        The last goal of accessibility is to ensure that <strong>validation messages</strong> are screen 
        readable. The built-in HTML browser messages are <strong>not</strong> screen readable. This will 
        assist a user with absent or bad vision to understand what is on the page.
    </p>
    <p>
        There are several tags that are important when it comes to implementing a form on a website. The 
        first tag that we will talk about is the <strong>form</strong> tag. This tag will hold all the contents 
        of the form that is to be implemented. It can hold any content besides another form tag. Alongside 
        paragraphs, headers and/or images, a form will almost always include input tags for users to enter data. 
        Forms have two very significant attributes, the <strong>action</strong>, and the <strong>method</strong>. 

        The action specifies where the request from the form should be sent. On form submission, the browser will package the data that is 
        contained in the form and send it to the URL that was specified. The value that the action attribute holds can be either a relative 
        path or an absolute URL. A relative path will be interpreted relative to the path of the page that contains the form. In the form 
        on this website, a relative path is used.

        The second attribute is the method, which specifies the HTTP method to be used in the HTTP request that gets sent when the form is 
        submitted. The value is case-insensitive and are typically "GET" or "POST". If the value is omitted, then it will default to "GET". 
        However, this website uses "POST".

        The next important tags are the <strong>field set</strong>, and <strong>legend</strong> tags. These tags separate form controls into logical 
        groups and play a part in making the forms more accessible for the visually-impaired. Fieldset has a default gray border and some padding, 
        while the legend is placed on top of the border. The legend typically includes a prompt that will help users understand that section's 
        purpose.

        The <strong>label</strong> tag is paired with controls, such as input. The label helps the user, and especially those that are using a screen 
        reader, to understand the purpose of their data entry. Inside the label tag, there is a <strong>for</strong> attribute. Its value should 
        match the form control's id attribute.

        The <strong>input</strong> tag is the most commonly used data-input tag. It is different from the other elements in the fact that it has an 
        attribute, <strong>type</strong>, which can change how it is displayed, type of data that it will take, and even if other attributes should 
        be included. Alongside the type attribute, the input tag should also contain a <strong>name</strong> attribute. The name attribute will inform the 
        server as to which part of the form the data is coming from. <strong>Required</strong> is another important attribute that can be included in an 
        input. It ensures that the form will not be submitted unless the "required" fields are filled in. This also stands as a barrier to bots 
        that may spam submit a form, causing issues with the website. <strong>Placeholder</strong> attributes can also be placed with an input tag to 
        guide the user further as to what information is desired in that tag.

        The <strong>select</strong> tag is used in a form to give the user a drop-down list of choices. It is similar to the input tag in that it has a 
        name attribute. Within the select tag, <strong>option</strong> tags can be created to add to the list of choices. An option 
        tag will typically have a value attribute that will mirror the value typed into it. The developer can 
        customize the list of choices so that one choice may show as the default when the form is loaded. On form submission, the name value of the select 
        tag will be paired with the value of the option that the user has selected.

        The <strong>textarea</strong> tag allows users to submit multiple lines of text. This can be used when asking for feedback or more in-depth information 
        from the user. It will have its own label and an array of attributes which include: name, cols, rows, id, and a placeholder.

        Finally, a <strong>button</strong> element is typically used instead of an input to submit the form. It will perform the action that is specified by the 
        form tag. The button can be pressed with a keyboard activation, mouse click, voice command, or the touch of a finger, providing multiple options for users.
    </p>
    <p>
        There are a myriad of ways that a form can be styled in order to <strong>improve usability</strong> among users. For starters, many forms are submitted through a mobile 
        device. This means that the form should account for a range of devices. Separating a group of labels and inputs from others will help to reduce confusion.
        All the heights and widths of inputs, selects, and buttons should be the size of the tip of a finger or a little bigger.

        Changing the default border of a fieldset tag to a different color, type, or width will help make the section pop. Inputs should have some padding in order to not 
        crowd the text or information that is being entered. Labels can be styled with their associated input tags to further reduce the visual clutter and make the form 
        easier to understand. For required fields, adding a red border to invalid fields and a green border to valid fields will give a user a visual cue 
        that it is a necessary field.
    </p>
</article>

<article id="express">
    <h3>Express</h3>
    <p>
        <strong>Express</strong>, short for Express.js, is a popular framework inside JavaScript. It provides, <strong>Application Programming Interfaces</strong> 
        for the various common tasks that a web application may need to do. Express gives the developer the ability to get, post, and delete data. It also allows for 
        the defining of ports and routes that the data will take. The developer is also able to work with static files and create dynamic responses from a template 
        created with Express. Middleware can also be used in order to handle requests made within the route that the data takes. Express is used in conjunction with 
        Node.js, or <strong>Node</strong> for short. Node allows for a developer to indirectly work with other developers in the form of <strong>packages</strong>. 
        These packages are developed, tested, and shared with/by the developer community. Node allows a developer to import packages that can solve one of the many 
        problems they may come across or improve their website even more. Node utilizes <strong>NPM</strong>, or the Node package manager, in order to utilize packages. 
        It is an online repository that one may find the package that they desire. It also comes with an easy-to-use command-line utility that will install packages from 
        the online repository and manage the dependencies that the developer defines for their project. NPM comes automatically installed with Node, which removes makes it 
        even easier to use.
    </p>
</article>

<article id="dataTypes">
    <h3>Data Types in JavaScript</h3>
    
    <p>
        There are multiple data types in JavaScript, but the main ones are numbers, Boolean, strings, symbols, special values such as undefined, or null, and an object. 
        Values that aren't an object are considered <strong>primitive types</strong>.

        <strong>Numbers</strong> in JavaScript have just one type, and that is double-precision floating-point numbers. JavaScript will automatically convert strings to numbers in some 
        arithmetic operations, but automatic conversion should not be relied on.

        <strong>Boolean</strong> values have just two values, true or false. In a condition, JavaScript will automatically convert the value into a Boolean value.

        <strong>Strings</strong> are simply characters, numbers, or symbols wrapped in either single or double quotes. <strong>String literals</strong> are strings that only contain
         characters. Through the use of <strong>Template Literals</strong>, developers can use expressions inside of strings. This is done through the use of <strong>backticks</strong>. 
         JavaScript will then read the expression and splice the conversion into the template.

        <strong>Special values</strong>, such as <strong>null</strong> or <strong>undefined</strong>, are indicators of an absence of a value.
    </p>

    <p>
        <strong>Objects</strong> are present in many languages of programming. Put simply, an object is a piece of encapsulated data that may store certain properties. One usage of an 
        object on this site is located on the <em>Order</em> page. Once a user presses the <em>Place Order</em> button, the page then sends an object into some JavaScript 
        code. The code then dissects the objects data in order to craft a custom-tailored response to the user. Object properties can be accessed through dot notation such 
        as, "object.property", or brackets such as, object["property"].

        <strong>Arrays</strong> in JavaScript are used to store different values, such as objects, and provide an easy way for a developer to access different indices of data. 
        If a developer or user tries to access an index in the array that does not contain anything, then the return value will be "undefined".

        <strong>JSON</strong>, or JavaScript Object Notation, is a widely used format for exchanging data between applications. JSON, however, is language independent and 
        most programming languages provide libraries for JSON including Python, Java, and C#. It is a great way to package an object and store it in a database, which can 
        then be restored later when needed.
    </p>
    
    <p>
        <strong>Conditions</strong> allow for different code to be run if certain conditions are met/unmet. This allows for flexibility of programs and the ability to 
        craft different responses to different inputs. One example of a condition that the user will see on the order page is when they place an order as referenced earlier. 
        If the user enters a quantity of 1 for the item they wish to "purchase" then no "s" will be added onto the item they buy. However, if a user purchases more than one of 
        the item then an "s" is added onto the end of the string representing the item, making it plural.

        <strong>Loops</strong> in JavaScript allow for a program to run a section of code a set number of times. Loops can be used to iterate over arrays or for arithmetic. There 
        are several ways to instantiate a loop including: <strong>While, Do While, For, For of, and For in</strong>. 
        
        While loops will iterate over a section of code until the expression it is checking evaluates to false. If the expression is never false, then <strong>it never stops.</strong> 
        In a while loop, the expression is evaluated before the code is run, unlike the next example.
        Do while loops are similar to the while loop, but the expression is evaluated after the section of code runs. This means that the code following a do while loop will be 
        run at least once.

        For loops will run for a set number of iterations. Its common usage is iterating over elements such as arrays or objects. There are three types of for loops (including for itself).
        
    </p>
    
    <p>
        <strong>Object-Oriented Programming</strong> is just that. In most programming languages, classes are used to instantiate an object and give it <strong>identity, state, and behavior.</strong> 
        JavaScript is unique in the fact, however, that objects can be created without first instantiating a class. Classes are <em>useful</em>, but not necessary. Objects have properties 
        which can be manipulated. Objects will have a distinct identity in that if two objects are created that have identical properties, they will still be different objects. They will 
        also have a state which is located in its properties which can be accessed, changed, or deleted. Finally, the object has a behavior. Behavior can be added to an object by adding a 
        property that is a function. The return value of the function will be the value of the property.
    </p>
    
    <p>
        <strong>Functions</strong> in JavaScript are "first-class" values. This means that functions can be assigned to variables, receive other functions as arguments, and 
        return functions. A function that receives another function as an argument is called a higher-order function. A common example of a higher-order function is the <strong>map</strong> 
        function. Map will take a function as an argument and iterate over a collection applying that function. Arguments in a function that are not declared/left out are set to undefined by default. 
        Extra arguments will simply be ignored.
    </p>

</article>
        </>
    )
}

export default TopicsPage