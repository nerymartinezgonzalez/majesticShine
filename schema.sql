DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE meals (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  weight VARCHAR(50) NOT NULL,
  diet LONGTEXT NOT NULL
);

INSERT INTO meals (weight, diet) VALUES ("Basic Shine", "CURRENT WEIGHT 110-130 lbs,

      Training Status
      Beginner

      Training Hours Wk 4
      (3 Strength, 1 Cardio)

      Intensity Of Effort
      Moderate (12)

      Goal
      Simultaneous Fat Loss And Muscle Gain

      Total Daily Calories
      2,560 (160 × [4 + 12])

      25% protein
      640 calories (160 grams× 4)

      34% fat
      864 calories (96 grams× 9)

      41% carbs
      1,056 calories (264 grams× 4)

      Your Sample Meal Plan

      Breakfast
      3 eggs scrambled with a handful of vegetables, 1 large banana

      Lunch
      4 oz chicken breast on a kaiser roll, 1 large handful of radishes

      Dinner
      6 oz tuna steak, 2 medium potatoes (6 to 7 oz each), sauteed swiss chard

      Snacks
      1 scoop protein powder mixed with 1 1/2 cups plain yogurt, 1/3 cup nuts, 1 apple.");

    INSERT INTO meals (weight, diet) VALUES ("130-160lbs",

      "CURRENT WEIGHT:
      130-160 lbs

      Training Status
      Advanced

      Training Hours Wk
      4.5 (3 Strength, 1.5 Cardio)

      Intensity Of Effort
      Moderate (10)

      Goal
      FAT LOSS & BUILD MUSCLE

      Total Daily Calories
      2,610 (180 × [4.5 + 10])

      28% protein
      720 calories (180 grams × 4)

      31% fat
      810 calories (90 grams × 9)

      41% carbs
      1,080 calories (270 grams × 4)
      Your Sample Meal Plan

      Breakfast
      3 hard-boiled eggs, 1 orange

      Lunch
      6 oz shrimp, 1 cup brown rice, 1 cup black beans, grilled onion and PEPPER

      Dinner
      6 oz lamb meatballs, 2 1/2 cups whole wheat pasta, arugula salad

      Snacks
      2 cups low-fat milk + 1 1/2 scoops protein powder; 2 tbsp almond butter + 1 apple.");

    INSERT INTO meals (weight, diet) VALUES ("160-190lbs",

      "CURRENT WEIGHT:
      160-190 lbs

      Training Status
      Intermediate

      Training Hours Wk
      2 (2 Strength, 0 Cardio)

      Intensity Of Effort
      Moderate (10)

      Goal
      WEIGHT LOSS & BUILD MUSCLE

      Total Daily Calories
      2,092 (216 × [2+10])

      30% protein
      764 calories (216 grams × 4)

      45% fat
      1,030 calories (130 grams × 9)

      22% carbs
      500 calories (139 grams × 4)

      Your Sample Meal Plan

      Breakfast
      1 scoop protein powder mixed with 2 tbsp peanut butter, 1 1/2 cups berries (+ liquid)

      Lunch
      6 oz baked black cod, 2 cups brown rice, 1 to 2 cups steamed green beans

      Dinner
      12 oz grass-fed steak, 1 small potato (3 oz), 1 to 2 cups steamed broccoli

      Snacks
      3/4 cup yogurt with 1 1/2 scoops protein powder, 2/3 cup nuts, 1 peachBro-Tacular Bob");



    INSERT INTO meals (weight, diet) VALUES ("190-220LBS",

      "CURRENT WEIGHT:
      190-220 lbs

      Training Status
      Intermediate

      Training Hours Wk
      2 (2 Strength, 0 Cardio)

      Intensity Of Effort
      Moderate (10)

      Goal
      WEIGHT LOSS & BUILD MUSCLE

      Total Daily Calories
      2,592 (216 × [2+10])

      30% protein
      820 calories (216 grams × 4)

      45% fat
      1,330 calories (130 grams × 9)

      22% carbs
      500 calories (139 grams × 4)

      BREAKFAST:
      5 eggs (2 palm-sized portions) - 1 cup (1 fist-sized portion) of spinach - 1/2 cup (1 cupped handful) of old-fashioned oats - 1/2 cup (1 cupped handful) mixed berries 1 tbsp (1 entire thumb) chopped walnuts 1 glass water/green tea/black coffee
      Lunch
      8 ounces (2 palm-sized portions) of chicken - 2 cups (2 fist-sized portions) mixed greens - 1 cup (1 fist-sized portion) chopped carrots and cucumbers - 1/2 cup (1 cupped handful) black beans - 2 tbsp (2 entire thumbs) guacamole - 1 glass water/green tea/black coffee
      Mid-Afternoon Snack
      2 scoops (2 palm-sized portions) protein powder - 1 cup (1 fist-sized portion) pumpkin - 1 cup (1 fist-sized portion) spinach - 1/2 cup (1 cupped handful) old-fashioned oats - 2 tbsp (2 entire thumbs) chopped walnuts - 8 ounces unsweetened vanilla-almond milk Ice cubes as desired
      Dinner
      8 oz (2 palm-sized portions) of wild salmon - 2 cups (2 fist-sized portions) of zucchini - 1 tbsp (1 entire thumb) of extra-virgin olive oil - 1 medium (2 cupped handfuls) sweet potato - 8 oz water.");
