DROP DATABASE IF EXISTS carousel;
CREATE DATABASE carousel;
USE carousel;

CREATE TABLE imageCarousel
(
  id INT NOT NULL
  AUTO_INCREMENT,
  Houses VARCHAR
  (100),
  PRIMARY KEY
  (id)
  );


  INSERT INTO imageCarousel
    (Houses)
  VALUES('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.21914721_0.jpg');

  INSERT INTO imageCarousel
    (Houses)
  VALUES('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.40886087_C.jpg');

  INSERT INTO imageCarousel
    (Houses)
  VALUES
    ('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.40886119_B.jpg');
  INSERT INTO imageCarousel
    (Houses)
  VALUES
    ('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.40886901_E.jpg');
  INSERT INTO imageCarousel
    (Houses)
  VALUES('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.40887142_O.jpg');

  INSERT INTO imageCarousel
    (Houses)
  VALUES('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.ML81764903_6.jpg');







