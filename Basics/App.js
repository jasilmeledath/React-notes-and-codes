/**
 * we are going to implement the below element tree using react!
 * <div>
 *      <div>
 *          <h1>Hello1<h1>
 *      <div>
 *      <div>
 *          <h1>Hello2<h1>
 *      <div>
 * <div>
 */


const parent = React.createElement(
    "div", { id: "parent" }, [
    React.createElement(
        "div", { id: "child-1" }, [
        React.createElement("h1", {}, "Hello!"),
        React.createElement("h2", {}, "hi from h2")
    ]),
    React.createElement(
        "div", { id: "child-2" }, [
        React.createElement("h1", {}, "Hello!"),
        React.createElement("h2", {}, "hi from h2")
    ])

]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 