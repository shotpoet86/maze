// module aliases
const {Engine, Render, Runner, Composite, Bodies, MouseConstraint, Mouse} = Matter;

// create an engine
const engine = Engine.create();
const {world} = engine;
const standardWidth = 800;
const standardHeight = 600
// create a renderer
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width: standardWidth,
        height: standardHeight
    }
});

// run the renderer
Render.run(render);
// run the engine
Runner.run(Runner.create(), engine);
Composite.add(world, MouseConstraint.create(engine, {mouse: Mouse.create(render.canvas)}))
//walls
const walls = [
    /*top*/
    Bodies.rectangle(400, 0, 800, 40, {isStatic: true}),
    /*bottom*/
    Bodies.rectangle(400, 600, 800, 40, {isStatic: true}),
    /*left*/
    Bodies.rectangle(0, 300, 40, 600, {isStatic: true}),
    /*right*/
    Bodies.rectangle(800, 300, 40, 600, {isStatic: true}),
]
Composite.add(world, walls)
/*random shapes*/
for (let i = 0; i < 50; i++) {
    if (Math.random() > 0.5) {
        Composite.add(world, Bodies.rectangle(Math.random() * standardWidth, Math.random() * standardHeight, 50, 50, {
            render: {
                //add specific color instead of empty string, otherwise random
                fillStyle: ''
            }
        }))
    } else {
        Composite.add(world, Bodies.circle(Math.random() * standardWidth, Math.random() * standardHeight, 35, {
            render: {
                //add specific color instead of empty string, otherwise random
                fillStyle: ''
            }
        }))
    }

}
