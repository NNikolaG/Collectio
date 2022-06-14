import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const $animations = [

    trigger('fade', [
        transition('void=>*', [
            style({
                opacity: 0
            }),
            animate('3s ease-in-out')
        ])
    ]),
    trigger('slideSide', [
        transition('void=>*', [
            style({
                transform: "translateX(-300px)"
            }),
            animate("3s ease-in-out")
        ])
    ]),
    trigger('slideUp', [
        transition('void=>*', [
            style({
                transform: "translateY(200px)"
            }),
            animate("3s ease-in-out")
        ])
    ])
];