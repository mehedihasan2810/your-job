import "./Blog.scss";

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-header">
        <h2>Blog</h2>
      </div>

      <div className="blog-container">
        <div className="question">
          <h4>When should you use context API?</h4>
          <p>
            When a component state needed by some other component in this case
            we should use context API to allot the state data among the
            components.{" "}
          </p>
        </div>
        <div className="question">
          <h4>What is a custom hook?</h4>
          <p>
            Usually in react we cant use hook other than components top label
            scope. In this case we can get use of react custom hook. Custom
            hooks allows us to write hook in function separate from component.
          </p>
        </div>
        <div className="question">
          <h4>What is useRef?</h4>
          <p>
            useRef is a react hook. which is used to store value between
            rerender. Another use case is that we can get dom element by this
            hook.
          </p>
        </div>
        <div className="question">
          <h4>What is useMemo?</h4>
          <p>
            useMemo is a react hook. The main usecase of this hook is that it is
            used to memoize the javascript mutable value like array or object.
            In react in every rerender this kind of mutable value gets a new
            reference and causes a rerender even though the actual value have
            not changed. to prevent this we use useMemo hook.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
