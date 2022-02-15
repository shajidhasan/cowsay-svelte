import { C3PO, armadillo, bishop, bunny, cat2, cheese, cowfee, elephant, goat, kitten, owl, shrug, turkey, tux, whale } from "cowsay2/cows";
import awesomeface from "cowsay2/cows/awesome-face";
import happywhale from "cowsay2/cows/happy-whale";

export const COWS = <const>['cow', 'C3PO', 'armadillo', 'awesome-face', 'bishop', 'bunny', 'cat', 'cheese', 'cowfee', 'elephant', 'goat', 'happy-whale', 'kitten', 'owl', 'shrug', 'turkey', 'tux', 'whale'];
export type Cow = typeof COWS[number];

export const COW_FILES = {
  cow: undefined,
  "C3PO": C3PO,
  "armadillo": armadillo,
  "awesome-face": awesomeface,
  "bishop": bishop,
  "bunny": bunny,
  "cat": cat2,
  "cheese": cheese,
  "cowfee": cowfee,
  "elephant": elephant,
  "goat": goat,
  "happy-whale": happywhale,
  "kitten": kitten,
  "owl": owl,
  "shrug": shrug,
  "turkey": turkey,
  "tux": tux,
  "whale": whale,
};

export const COW_TEXT_WRAP = 30;


export interface CowFill {
  type: 'solid' | 'gradient';
  color?: string;
  gradient?: {
    from: string;
    to: string;
  };
  cssClass: string;
}

export interface ColorScheme {
  background: CowFill;
  text: CowFill;
}

export const COLOR_SCHEMES: ColorScheme[] = [
  {
    background: {
      type: 'solid',
      color: 'white',
      cssClass: 'bg-white'
    },
    text: {
      type: 'solid',
      color: 'black',
      cssClass: 'bg-black'
    }
  },
  {
    background: {
      type: 'solid',
      color: 'black',
      cssClass: 'bg-black'
    },
    text: {
      type: 'solid',
      color: 'white',
      cssClass: 'bg-white'
    }
  },
  {
    background: {
      type: 'solid',
      color: '#111827',
      cssClass: 'bg-gray-900'
    },
    text: {
      type: 'solid',
      color: '#16a34a',
      cssClass: 'bg-green-600'
    }
  },
  {
    background: {
      type: 'solid',
      color: '#fff7ed',
      cssClass: 'bg-orange-50'
    },
    text: {
      type: 'solid',
      color: '#d97706',
      cssClass: 'bg-amber-600'
    }
  },
  {
    background: {
      type: 'gradient',
      gradient: {
        from: '#a5b4fc',
        to: '#9333ea'
      },
      cssClass: 'bg-gradient-to-br from-indigo-300 to-purple-600'
    },
    text: {
      type: 'solid',
      color: 'white',
      cssClass: 'bg-white'
    }
  },
  {
    background: {
      type: 'solid',
      color: '#111827',
      cssClass: 'bg-gray-900'
    },
    text: {
      type: 'gradient',
      gradient: {
        from: '#fff7ed',
        to: '#ef4444'
      },
      cssClass: 'bg-gradient-to-br from-orange-50 to-red-500'
    }
  }
]
