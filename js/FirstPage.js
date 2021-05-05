class FirstPage {
    constructor() {
        this.button = createButton('DETAILS');
        this.button1 = createButton("BACK");
        this.button2 = createButton('BEGIN');
    }
    display() {
        this.button.position(610, 650);
        this.button1.position(385, 650);
        this.button2.position(130, 650);
        
        this.button.mousePressed(function () {
            dotted.visible = false;
            rectangle.visible = false;
            triangle.visible = false;
            square.visible = false;
            star.visible = false;
            circle.visible = false;
            heart.visible = false;
            textSize(20);
            fill(0);
            strokeWeight(2);
            stroke(0);
            text("LEARNING SHAPES NOT ONLY HELPS CHILDREN IDENTIFY ", 115, 140);
            text("AND ORGANIZE VISUAL INFORMATION , IT WILL HELP THEM ", 110, 175);
            text("LEARN SKILLS IN OTHER CURRICULUM AREAS INCLUDING", 115, 210);
            text("READING , MATH , AND SCIENCE LEARNING SHAPES ALSO", 115, 245);
            text("HELPS THEM UNDERSTAND OTHER SIGNS AND SYMBOLS...", 115, 280);
            text("THIS APP WILL HELP THEM TO REMEMBER THE SHAPES", 115, 450);
            text("WITH VERY EASY CONCEPTS AND THEY CAN IDENTIFY", 115, 485);
            text("THE SHAPES LIFELONG . IT WOULD BASICALLY EXPLAIN.", 115, 520);
            text("EXAMPLE : RECTANGLE - IT IS A SHAPE WHICH IS MADE ", 115, 555);
            text("AFTER STRETCHING THE SQUARE . SUCH FUN EXANPLES", 115, 590);
            text("ARE EMBEDDED IN THE APP.", 115, 625);
        });
        //button1 is for back;
        this.button1.mousePressed(function () {
            dotted.visible = true;
            rectangle.visible = true;
            triangle.visible = true;
            square.visible = true;
            star.visible = true;
            circle.visible = true;
            heart.visible = true;
        });
        this.button2.mousePressed(function () {
            dotted.visible = false;
            rectangle.visible = false;
            triangle.visible = false;
            square.visible = false;
            star.visible = false;
            circle.visible = false;
            heart.visible = false;
            textSize(20);
            fill(0);
            strokeWeight(2);
            text(" 1) BASICS", 120, 150);
            text(" 2) QUADRILATERALS", 120, 190);
            text(" 3) TRIANGLES", 120, 230);
            text(" 4) CIRCLES", 120, 270);
            text(" 5) OTHER SHAPES", 120, 310);
        });
        
    }
}