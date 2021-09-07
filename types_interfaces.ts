type Point = { x: number; y: number };
interface IPoint {
    x: number;
    y: number;
}

type D3Point = Point & {
    z: number;
};

interface I3Dpoint extends IPoint {
    z: number;
}

type srtingOrNumber = string | number;

function print(coord: Point) {}
function print2(coord: srtingOrNumber) {}
function print3(coord: IPoint) {}

interface Test {
    a: number;
}
interface Test {
    b: number;
}

const crb = (point: IPoint) => {
    const d: I3Dpoint = point as I3Dpoint;
};

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;

interface Reply {
    userId: number;
    id: number;
    title: string;
    info: Info;
    tags: Tag;
}

interface Info {
    desc: string;
    isActive: boolean;
}

interface Tag {
    name: string;
    value: number;
}
