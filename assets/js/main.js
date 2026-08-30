
/* =========================================================
   RHYTHM
   Complete Interactive JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       TODAY TRACKER
       ===================================================== */

    let movementCount = 0;
    let mindfulCount = 0;
    let waterAmount = 0;

    const todayWater = document.getElementById("today-water");
    const todayMove = document.getElementById("today-move");
    const todayPause = document.getElementById("today-pause");

    const todayPercent = document.getElementById("today-percent");
    const todayProgressFill = document.getElementById("today-progress-fill");
    const todayProgressText = document.getElementById("today-progress-text");


    function updateTodayProgress() {

        const waterProgress = Math.min(waterAmount / 6, 1);
        const movementProgress = Math.min(movementCount / 3, 1);
        const mindfulProgress = Math.min(mindfulCount / 2, 1);

        const totalProgress = Math.round(
            (
                waterProgress +
                movementProgress +
                mindfulProgress
            ) / 3 * 100
        );


        if (todayPercent) {
            todayPercent.textContent = totalProgress + "%";
        }


        if (todayProgressFill) {
            todayProgressFill.style.width = totalProgress + "%";
        }


        if (todayProgressText) {

            if (totalProgress === 0) {

                todayProgressText.textContent =
                    "Your day is just beginning.";

            } else if (totalProgress < 40) {

                todayProgressText.textContent =
                    "A gentle start. Keep going at your own pace.";

            } else if (totalProgress < 70) {

                todayProgressText.textContent =
                    "You are creating a beautiful rhythm today.";

            } else if (totalProgress < 100) {

                todayProgressText.textContent =
                    "Lovely progress. A few small moments to go.";

            } else {

                todayProgressText.textContent =
                    "Your rhythm is beautifully complete today.";

            }

        }

    }



    /* =====================================================
       WATER TRACKER
       ===================================================== */

    const waterButtons = document.querySelectorAll(
        ".water-progress button"
    );

    const waterCount = document.getElementById(
        "water-count"
    );


    waterButtons.forEach(function (button, index) {

        button.addEventListener("click", function () {

            waterAmount = index + 1;


            waterButtons.forEach(function (item, i) {

                if (i <= index) {

                    item.classList.add("active");

                } else {

                    item.classList.remove("active");

                }

            });


            if (waterCount) {

                waterCount.textContent =
                    waterAmount +
                    " / " +
                    waterButtons.length +
                    " glasses";

            }


            if (todayWater) {

                todayWater.textContent =
                    waterAmount + " / 6";

            }


            updateTodayProgress();

        });

    });



    /* =====================================================
       MOVEMENT
       ===================================================== */

    function startMovement(button, message, originalText) {

        movementCount++;


        if (todayMove) {

            todayMove.textContent =
                movementCount;

        }


        button.classList.add("completed");

        button.textContent = message;


        updateTodayProgress();


        setTimeout(function () {

            button.classList.remove("completed");

            button.textContent = originalText;

        }, 3000);

    }



    /* =====================================================
       MORNING YOGA
       ===================================================== */

    const yogaButton = document.querySelector(
        '[data-action="yoga"]'
    );


    if (yogaButton) {

        yogaButton.addEventListener("click", function () {

            startMovement(
                yogaButton,
                "Practice started",
                "Start practice"
            );

        });

    }



    /* =====================================================
       MINDFUL WALK
       ===================================================== */

    const walkButton = document.querySelector(
        '[data-action="walk"]'
    );


    if (walkButton) {

        walkButton.addEventListener("click", function () {

            startMovement(
                walkButton,
                "Walk started",
                "Take a walk"
            );

        });

    }



    /* =====================================================
       FIVE-MINUTE STRETCH
       ===================================================== */

    const stretchButton = document.querySelector(
        '[data-action="stretch"]'
    );


    if (stretchButton) {

        stretchButton.addEventListener("click", function () {

            startMovement(
                stretchButton,
                "Stretch started",
                "Begin stretch"
            );

        });

    }



    /* =====================================================
       BREATHING
       ===================================================== */

    const breatheButton = document.querySelector(
        '[data-action="breathe"]'
    );

    const breatheCard = document.querySelector(
        ".breathing-card"
    );

    const breathingText = document.getElementById(
        "breathing-text"
    );


    let breathingActive = false;
    let breathingTimer = null;


    function stopBreathing() {

        breathingActive = false;


        if (breathingTimer) {

            clearInterval(breathingTimer);

            breathingTimer = null;

        }


        if (breatheCard) {

            breatheCard.classList.remove(
                "breathing"
            );

        }


        if (breatheButton) {

            breatheButton.textContent =
                "Start breathing";

        }


        if (breathingText) {

            breathingText.textContent =
                "BREATHE";

        }

    }


    function startBreathing() {

        const phases = [
            "INHALE",
            "HOLD",
            "EXHALE",
            "REST"
        ];


        let phase = 0;


        if (breathingText) {

            breathingText.textContent =
                phases[phase];

        }


        breathingTimer = setInterval(function () {

            phase =
                (phase + 1) %
                phases.length;


            if (breathingText) {

                breathingText.textContent =
                    phases[phase];

            }

        }, 4000);

    }


    if (breatheButton && breatheCard) {

        breatheButton.addEventListener(
            "click",
            function () {

                if (!breathingActive) {

                    breathingActive = true;

                    breatheCard.classList.add(
                        "breathing"
                    );

                    breatheButton.textContent =
                        "Pause breathing";


                    mindfulCount++;


                    if (todayPause) {

                        todayPause.textContent =
                            mindfulCount;

                    }


                    updateTodayProgress();

                    startBreathing();

                } else {

                    stopBreathing();

                }

            }
        );

    }



    /* =====================================================
       DAILY INTENTION
       ===================================================== */

    const intentionButton =
        document.getElementById(
            "intention-button"
        );

    const intentionText =
        document.getElementById(
            "intention-text"
        );


    const intentions = [

        "I don't have to do everything at once.",

        "Today, I choose progress over perfection.",

        "My body deserves patience.",

        "I can slow down without falling behind.",

        "Small steps still move me forward.",

        "I am allowed to take things gently.",

        "Rest is also part of progress."

    ];


    let intentionIndex = 0;


    if (intentionButton && intentionText) {

        intentionButton.addEventListener(
            "click",
            function () {

                intentionIndex =
                    (intentionIndex + 1) %
                    intentions.length;


                intentionText.textContent =
                    "“" +
                    intentions[intentionIndex] +
                    "”";


                mindfulCount++;


                if (todayPause) {

                    todayPause.textContent =
                        mindfulCount;

                }


                updateTodayProgress();

            }
        );

    }



    /* =====================================================
       NOURISH — THE BASICS
       ===================================================== */

    const nourishItems =
        document.querySelectorAll(
            ".nourish-item"
        );

    const nourishTitle =
        document.getElementById(
            "nourish-title"
        );

    const nourishText =
        document.getElementById(
            "nourish-text"
        );


    const nourishContent = {

        color: {

            title: "Add a little color.",

            text:
                "Try adding two or three different colors to your next meal. Vegetables and fruit can make a simple plate more varied."

        },

        simple: {

            title: "Keep it beautifully simple.",

            text:
                "A satisfying meal does not need to be complicated. Combine a protein, something colorful and something filling."

        },

        water: {

            title: "Make water easy.",

            text:
                "Keep a glass or bottle nearby and take small sips throughout your day."

        },

        listen: {

            title: "Listen in.",

            text:
                "Notice your hunger, fullness and energy. Give yourself enough food and allow yourself to slow down."

        }

    };


    nourishItems.forEach(function (item) {

        item.addEventListener(
            "click",
            function () {

                nourishItems.forEach(
                    function (other) {

                        other.classList.remove(
                            "active"
                        );

                    }
                );


                item.classList.add("active");


                const type =
                    item.getAttribute(
                        "data-nourish"
                    );


                const content =
                    nourishContent[type];


                if (
                    content &&
                    nourishTitle &&
                    nourishText
                ) {

                    nourishTitle.textContent =
                        content.title;

                    nourishText.textContent =
                        content.text;

                }

            }
        );

    });



    /* =====================================================
       PLATE BUILDER
       ===================================================== */

    const plateButtons =
        document.querySelectorAll(
            ".plate-buttons button"
        );

    const plateResult =
        document.getElementById(
            "plate-result"
        );


    let selectedFoods = [];


    plateButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const food =
                    button.getAttribute(
                        "data-plate"
                    );


                if (!food) {
                    return;
                }


                if (
                    selectedFoods.includes(food)
                ) {

                    selectedFoods =
                        selectedFoods.filter(
                            function (item) {

                                return item !== food;

                            }
                        );


                    button.classList.remove(
                        "selected"
                    );

                } else {

                    selectedFoods.push(food);

                    button.classList.add(
                        "selected"
                    );

                }


                if (plateResult) {

                    if (
                        selectedFoods.length === 0
                    ) {

                        plateResult.textContent =
                            "Choose something from your plate.";

                    } else if (
                        selectedFoods.length === 4
                    ) {

                        plateResult.textContent =
                            "Beautifully balanced. Your plate has variety.";

                    } else {

                        plateResult.textContent =
                            selectedFoods.length +
                            " food group" +
                            (
                                selectedFoods.length > 1
                                    ? "s"
                                    : ""
                            ) +
                            " selected. Keep building.";

                    }

                }

            }
        );

    });



    /* =====================================================
       BUILD MY PLATE
       ===================================================== */

    const buildPlateButton =
        document.getElementById(
            "build-plate-button"
        );


    const mealIdeas = [

        "Vegetable curry + dal + whole-wheat roti + fruit.",

        "Grilled chicken + vegetables + brown rice + fruit.",

        "Lentils + mixed vegetables + whole-grain roti + yogurt.",

        "Eggs + sautéed vegetables + whole-grain toast + banana.",

        "Chickpeas + salad + whole grains + seasonal fruit."

    ];


    if (buildPlateButton) {

        buildPlateButton.addEventListener(
            "click",
            function () {

                const randomIndex =
                    Math.floor(
                        Math.random() *
                        mealIdeas.length
                    );


                if (plateResult) {

                    plateResult.textContent =
                        mealIdeas[randomIndex];

                }


                buildPlateButton.textContent =
                    "Your idea is ready";


                setTimeout(function () {

                    buildPlateButton.textContent =
                        "Build my plate";

                }, 3000);

            }
        );

    }



    /* =====================================================
       SMOOTH NAVIGATION
       ===================================================== */

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navigationLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });



    /* =====================================================
       INITIALIZE
       ===================================================== */

    updateTodayProgress();


    console.log("RHYTHM is ready.");

});

