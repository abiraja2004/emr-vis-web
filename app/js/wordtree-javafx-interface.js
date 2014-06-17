doc_class = new Object();
doc_class.variable = null;
doc_class.positive = [];
doc_class.negative = [];

function getSentenceStats() {
  updateSentenceStats(data.matches);
}

function updateSentenceStats(matches){
	total = data.total;
  percentange = 100*matches/total;
  JavaFXApp.setLabelText("Documents included: "+ 
                            matches+"/"+total+
                            " ( "+percentange.toFixed(2)+"% ) ");
}

function updateFeedback(selected, root){
	JavaFXApp.updateFeedback(selected, root);
}

function updateClass(variable, positive, negative){
	doc_class.variable = variable;
	doc_class.positive = JSON.parse(positive);
	doc_class.negative = JSON.parse(negative);
}

/* Dummy values */
updateClass("Caecum", "[0, 1, 2, 3, 7, 8, 11, 13, 14, 15, 16, 18, 19, 20, 22, 28, 30, 31, 34, 36, 39, 40, 41, 42, 43, 44, 50, 52, 56, 57, 58, 59, 65, 70, 75, 76, 77, 79, 80, 83, 87, 89, 90, 93, 95, 98, 100, 103, 104, 105, 108, 110, 112, 114, 115, 121, 122, 124, 125, 126, 127, 130, 131, 132, 133, 134, 136, 138, 139, 145, 146, 150, 154, 156, 157, 158, 160, 164, 165, 166, 167, 170, 171, 172, 173, 174, 175, 177, 178, 180, 187, 188, 191, 192, 193, 196, 201, 202, 205, 206, 207, 208, 214, 215, 216, 220, 221, 224, 228, 232, 234, 235, 236, 238, 244, 245, 249, 252, 255, 257, 258, 259, 261, 264, 266, 268, 270, 271, 273, 274, 275, 276, 277, 278, 279, 280, 283, 286, 290, 292, 298, 300, 301, 303, 304, 305, 307, 308, 310, 311, 313, 315, 316, 317, 323, 325, 328, 330, 332, 333, 334, 336, 338, 340, 341, 342, 344, 345, 351, 353, 356, 357, 358, 361, 363, 365, 366, 372, 377, 378, 382, 385, 386, 387, 389, 390, 397, 398, 403, 407, 408, 410, 420, 421, 423, 424, 425, 427, 430, 435, 438, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 452, 453, 454, 459, 461, 463, 466, 467, 468, 470, 471, 472, 473, 474, 475, 477, 480, 481, 484, 485, 488, 490, 491, 492, 493, 495, 496, 497, 500, 501, 502, 504, 506, 507, 509, 510, 511, 512, 513, 517, 518, 519, 520, 524, 526, 527, 528, 534, 537, 541, 542, 543, 544, 552, 553, 555, 562, 565, 566, 569, 571, 573, 578, 579, 580, 581, 582, 586, 588, 591, 596, 597, 598, 599, 601, 603, 604, 605, 606, 607, 609, 612, 613, 615, 617, 619, 620, 623, 626, 627, 628, 629, 631, 632, 634, 636, 637, 638, 639, 640, 641, 642, 644, 646, 651, 653, 655, 658, 659, 660, 663, 664, 668, 670, 672]", "[4, 5, 6, 9, 10, 12, 17, 21, 23, 24, 25, 26, 27, 29, 32, 33, 35, 37, 38, 45, 46, 47, 48, 49, 51, 53, 54, 55, 60, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 78, 81, 82, 84, 85, 86, 88, 91, 92, 94, 96, 97, 99, 101, 102, 106, 107, 109, 111, 113, 116, 117, 118, 119, 120, 123, 128, 129, 135, 137, 140, 141, 142, 143, 144, 147, 148, 149, 151, 152, 153, 155, 159, 161, 162, 163, 168, 169, 176, 179, 181, 182, 183, 184, 185, 186, 189, 190, 194, 195, 197, 198, 199, 200, 203, 204, 209, 210, 211, 212, 213, 217, 218, 219, 222, 223, 225, 226, 227, 229, 230, 231, 233, 237, 239, 240, 241, 242, 243, 246, 247, 248, 250, 251, 253, 254, 256, 260, 262, 263, 265, 267, 269, 272, 281, 282, 284, 285, 287, 288, 289, 291, 293, 294, 295, 296, 297, 299, 302, 306, 309, 312, 314, 318, 319, 320, 321, 322, 324, 326, 327, 329, 331, 335, 337, 339, 343, 346, 347, 348, 349, 350, 352, 354, 355, 359, 360, 362, 364, 367, 368, 369, 370, 371, 373, 374, 375, 376, 379, 380, 381, 383, 384, 388, 391, 392, 393, 394, 395, 396, 399, 400, 401, 402, 404, 405, 406, 409, 411, 412, 413, 414, 415, 416, 417, 418, 419, 422, 426, 428, 429, 431, 432, 433, 434, 436, 437, 439, 450, 451, 455, 456, 457, 458, 460, 462, 464, 465, 469, 476, 478, 479, 482, 483, 486, 487, 489, 494, 498, 499, 503, 505, 508, 514, 515, 516, 521, 522, 523, 525, 529, 530, 531, 532, 533, 535, 536, 538, 539, 540, 545, 546, 547, 548, 549, 550, 551, 554, 556, 557, 558, 559, 560, 561, 563, 564, 567, 568, 570, 572, 574, 575, 576, 577, 583, 584, 585, 587, 589, 590, 592, 593, 594, 595, 600, 602, 608, 610, 611, 614, 616, 618, 621, 622, 624, 625, 630, 633, 635, 643, 645, 647, 648, 649, 650, 652, 654, 656, 657, 661, 662, 665, 666, 667, 669, 671]");

