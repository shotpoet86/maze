// module aliases
const {Engine, Render, Runner, World, Bodies} = Matter;

// create an engine
const engine = Engine.create();
const {world} = engine;

// create a renderer
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600
    }
});

// run the renderer
Render.run(render);
// run the engine
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200, 200, 50, 50, {isStatic: true});
World.add(world, shape)
