const pencil = {
    length: "7.5 inches",
    shape: "hexagonal",
    daimeter: "1/4 inch",
    write: function() { /* do writing */ },
    erase: function() { /* do erasing */ },
    sharpen: function() { /* do sharpening */ }
}

pencil.sharpen();

pencil.length = "7 inches" ;
pencil.sharpness = "sharp" ;

const newPencil = { ...pencil } ;