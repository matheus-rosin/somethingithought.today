---
title: Did I just discovered a new mathematical formula?
description: What a weird way of starting a blog... anyways, please join me in my journey of spending time reasoning about complex stuff I know nothing about for no particular reason.
publishingDate: 2024-06-14 12:00:00
---

Let me start with the disclaimer: I am not sure if this is really unknown, I don’t know if it is useful for something, and I could never give a proper proof for it.
I’m just a simple developer and far away from being a mathematician; so be nice.
Even if this is not new, I’m glad that I managed to figure this out all by myself.

## The history

It all occurred in three fases.
The first one started at high school one day when I was in a city bus coming back home.
My brain usually never leave me alone, so on that day I was playing with car plates numbers as I saw them through the window.
I can’t remember exactly how, but I realized that any <math><mi>x</mi></math> integer squared equals to one below it times one above it plus one.

{% figure "Chill out; I know this is basic." %}
| <math><mrow><mi>A</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></mrow></math>           | <math><mrow><mi>B</mi><mo>=</mo><mo>(</mo><mi>x</mi><mo>&minus;</mo><mn>1</mn><mo>)</mo><mo>&sdot;</mo><mo>(</mo><mi>x</mi><mo>&plus;</mo><mn>1</mn><mo>)</mo></mrow></math> | <math><mrow><mi>A</mi><mo>&minus;</mo><mi>B</mi></mrow></math>                        |
| -------------------------------------------------------------------------------    | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| <math><mrow><msup><mn>1</mn><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>    | <math><mrow><mn>0</mn><mo>&times;</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>                                                                                           | <math><mrow><mn>1</mn><mo>&minus;</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>    |
| <math><mrow><msup><mn>2</mn><mn>2</mn></msup><mo>=</mo><mn>4</mn></mrow></math>    | <math><mrow><mn>1</mn><mo>&times;</mo><mn>3</mn><mo>=</mo><mn>3</mn></mrow></math>                                                                                           | <math><mrow><mn>4</mn><mo>&minus;</mo><mn>3</mn><mo>=</mo><mn>1</mn></mrow></math>    |
| <math><mrow><msup><mn>3</mn><mn>2</mn></msup><mo>=</mo><mn>9</mn></mrow></math>    | <math><mrow><mn>2</mn><mo>&times;</mo><mn>4</mn><mo>=</mo><mn>8</mn></mrow></math>                                                                                           | <math><mrow><mn>9</mn><mo>&minus;</mo><mn>8</mn><mo>=</mo><mn>1</mn></mrow></math>    |
| <math><mrow><msup><mn>4</mn><mn>2</mn></msup><mo>=</mo><mn>16</mn></mrow></math>   | <math><mrow><mn>3</mn><mo>&times;</mo><mn>5</mn><mo>=</mo><mn>15</mn></mrow></math>                                                                                          | <math><mrow><mn>16</mn><mo>&minus;</mo><mn>15</mn><mo>=</mo><mn>1</mn></mrow></math>  |
| <math><mrow><msup><mn>5</mn><mn>2</mn></msup><mo>=</mo><mn>25</mn></mrow></math>   | <math><mrow><mn>4</mn><mo>&times;</mo><mn>6</mn><mo>=</mo><mn>24</mn></mrow></math>                                                                                          | <math><mrow><mn>25</mn><mo>&minus;</mo><mn>24</mn><mo>=</mo><mn>1</mn></mrow></math>  |
| <math><mrow><msup><mn>6</mn><mn>2</mn></msup><mo>=</mo><mn>36</mn></mrow></math>   | <math><mrow><mn>5</mn><mo>&times;</mo><mn>7</mn><mo>=</mo><mn>35</mn></mrow></math>                                                                                          | <math><mrow><mn>36</mn><mo>&minus;</mo><mn>35</mn><mo>=</mo><mn>1</mn></mrow></math>  |
| <math><mrow><msup><mn>7</mn><mn>2</mn></msup><mo>=</mo><mn>49</mn></mrow></math>   | <math><mrow><mn>6</mn><mo>&times;</mo><mn>8</mn><mo>=</mo><mn>48</mn></mrow></math>                                                                                          | <math><mrow><mn>49</mn><mo>&minus;</mo><mn>48</mn><mo>=</mo><mn>1</mn></mrow></math>  |
| <math><mrow><msup><mn>8</mn><mn>2</mn></msup><mo>=</mo><mn>64</mn></mrow></math>   | <math><mrow><mn>7</mn><mo>&times;</mo><mn>9</mn><mo>=</mo><mn>63</mn></mrow></math>                                                                                          | <math><mrow><mn>64</mn><mo>&minus;</mo><mn>63</mn><mo>=</mo><mn>1</mn></mrow></math>  |
| <math><mrow><msup><mn>9</mn><mn>2</mn></msup><mo>=</mo><mn>81</mn></mrow></math>   | <math><mrow><mn>8</mn><mo>&times;</mo><mn>10</mn><mo>=</mo><mn>80</mn></mrow></math>                                                                                         | <math><mrow><mn>81</mn><mo>&minus;</mo><mn>80</mn><mo>=</mo><mn>1</mn></mrow></math>  |
| <math><mrow><msup><mn>10</mn><mn>2</mn></msup><mo>=</mo><mn>100</mn></mrow></math> | <math><mrow><mn>9</mn><mo>&times;</mo><mn>11</mn><mo>=</mo><mn>99</mn></mrow></math>                                                                                         | <math><mrow><mn>100</mn><mo>&minus;</mo><mn>99</mn><mo>=</mo><mn>1</mn></mrow></math> |
{% endfigure %}

Then a few years later (2016, according to a document I found on my drive in which I was exploring this in more detail) I strived to find out if it could be applied to powers other than two and to describe it as a formula.
I ended up with two different equations, one for even and another for odd exponents.
For some reason I didn’t see at that moment that the one for even exponents could be used for both cases.
This is the one we’ll be considering in this article.

Before we jump right in, let’s walk through some relations that helped me to complete this task.

{% figure "Nice, right?" %}
| <math><mrow><msub><mi>A</mi><mi>x</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></mrow></math> | <math><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><msub><mi>A</mi><mi>x</mi></msub><mo>&minus;</mo><msub><mi>A</mi><mrow><mi>x</mi><mo>&minus;</mo><mn>1</mn></mrow></msub></mrow></math> | <math><mrow><msub><mi>C</mi><mi>x</mi></msub><mo>=</mo><msub><mi>B</mi><mi>x</mi></msub><mo>&minus;</mo><msub><mi>B</mi><mrow><mi>x</mi><mo>&minus;</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>!</mo></mrow></math> |
| -------------------------------------------------------------------------------                 | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <math><mrow><msup><mn>1</mn><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>                 |                                                                                                                                                                                                |                                                                                                                                                                                                                              |
| <math><mrow><msup><mn>2</mn><mn>2</mn></msup><mo>=</mo><mn>4</mn></mrow></math>                 | <math><mrow><mn>4</mn><mo>&minus;</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow></math>                                                                                                             |                                                                                                                                                                                                                              |
| <math><mrow><msup><mn>3</mn><mn>2</mn></msup><mo>=</mo><mn>9</mn></mrow></math>                 | <math><mrow><mn>9</mn><mo>&minus;</mo><mn>4</mn><mo>=</mo><mn>5</mn></mrow></math>                                                                                                             | <math><mrow><mn>5</mn><mo>&minus;</mo><mn>3</mn><mo>=</mo><mn>2</mn></mrow></math>                                                                                                                                           |
| <math><mrow><msup><mn>4</mn><mn>2</mn></msup><mo>=</mo><mn>16</mn></mrow></math>                | <math><mrow><mn>16</mn><mo>&minus;</mo><mn>9</mn><mo>=</mo><mn>7</mn></mrow></math>                                                                                                            | <math><mrow><mn>7</mn><mo>&minus;</mo><mn>5</mn><mo>=</mo><mn>2</mn></mrow></math>                                                                                                                                           |
| <math><mrow><msup><mn>5</mn><mn>2</mn></msup><mo>=</mo><mn>25</mn></mrow></math>                | <math><mrow><mn>25</mn><mo>&minus;</mo><mn>16</mn><mo>=</mo><mn>9</mn></mrow></math>                                                                                                           | <math><mrow><mn>9</mn><mo>&minus;</mo><mn>7</mn><mo>=</mo><mn>2</mn></mrow></math>                                                                                                                                           |
| <math><mrow><msup><mn>6</mn><mn>2</mn></msup><mo>=</mo><mn>36</mn></mrow></math>                | <math><mrow><mn>36</mn><mo>&minus;</mo><mn>25</mn><mo>=</mo><mn>11</mn></mrow></math>                                                                                                          | <math><mrow><mn>11</mn><mo>&minus;</mo><mn>9</mn><mo>=</mo><mn>2</mn></mrow></math>                                                                                                                                          |
| <math><mrow><msup><mn>7</mn><mn>2</mn></msup><mo>=</mo><mn>49</mn></mrow></math>                | <math><mrow><mn>49</mn><mo>&minus;</mo><mn>36</mn><mo>=</mo><mn>13</mn></mrow></math>                                                                                                          | <math><mrow><mn>13</mn><mo>&minus;</mo><mn>11</mn><mo>=</mo><mn>2</mn></mrow></math>                                                                                                                                         |
| <math><mrow><msup><mn>8</mn><mn>2</mn></msup><mo>=</mo><mn>64</mn></mrow></math>                | <math><mrow><mn>64</mn><mo>&minus;</mo><mn>49</mn><mo>=</mo><mn>15</mn></mrow></math>                                                                                                          | <math><mrow><mn>15</mn><mo>&minus;</mo><mn>13</mn><mo>=</mo><mn>2</mn></mrow></math>                                                                                                                                         |
| <math><mrow><msup><mn>9</mn><mn>2</mn></msup><mo>=</mo><mn>81</mn></mrow></math>                | <math><mrow><mn>81</mn><mo>&minus;</mo><mn>64</mn><mo>=</mo><mn>17</mn></mrow></math>                                                                                                          | <math><mrow><mn>17</mn><mo>&minus;</mo><mn>15</mn><mo>=</mo><mn>2</mn></mrow></math>                                                                                                                                         |
| <math><mrow><msup><mn>10</mn><mn>2</mn></msup><mo>=</mo><mn>100</mn></mrow></math>              | <math><mrow><mn>100</mn><mo>&minus;</mo><mn>81</mn><mo>=</mo><mn>19</mn></mrow></math>                                                                                                         | <math><mrow><mn>19</mn><mo>&minus;</mo><mn>17</mn><mo>=</mo><mn>2</mn></mrow></math>                                                                                                                                         |
{% endfigure %}

Note that when we recursively subtract one value from the previous one, we get at the end the factorial of the exponent. Let’s see another example.

{% figure "It was a lot easier to do it in Excel." %}
| <math><mrow><msub><mi>A</mi><mi>x</mi></msub><mo>=</mo><msup><mi>x</mi><mn>5</mn></mrow></math> | <math><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><msub><mi>A</mi><mi>x</mi></msub><mo>&minus;</mo><msub><mi>A</mi><mrow><mi>x</mi><mo>&minus;</mo><mn>1</mn></mrow></msub></mrow></math> | <math><mrow><msub><mi>C</mi><mi>x</mi></msub><mo>=</mo><msub><mi>B</mi><mi>x</mi></msub><mo>&minus;</mo><msub><mi>B</mi><mrow><mi>x</mi><mo>&minus;</mo><mn>1</mn></mrow></msub></mrow></math> | <math><mrow><msub><mi>D</mi><mi>x</mi></msub><mo>=</mo><msub><mi>C</mi><mi>x</mi></msub><mo>&minus;</mo><msub><mi>C</mi><mrow><mi>x</mi><mo>&minus;</mo><mn>1</mn></mrow></msub></mrow></math> | <math><mrow><msub><mi>E</mi><mi>x</mi></msub><mo>=</mo><msub><mi>D</mi><mi>x</mi></msub><mo>&minus;</mo><msub><mi>D</mi><mrow><mi>x</mi><mo>&minus;</mo><mn>1</mn></mrow></msub></mrow></math> | <math><mrow><msub><mi>F</mi><mi>x</mi></msub><mo>=</mo><msub><mi>E</mi><mi>x</mi></msub><mo>&minus;</mo><msub><mi>E</mi><mrow><mi>x</mi><mo>&minus;</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>5</mn><mi>!</mi></mrow></math> |
| -------------------------------------------------------------------------------                 | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <math><mrow><msup><mn>1</mn><mn>5</mn></msup><mo>=</mo><mn>1</mn></mrow></math>                 |                                                                                                                                                                                                |                                                                                                                                                                                                |                                                                                                                                                                                                |                                                                                                                                                                                                |                                                                                                                                                                                                                              |
| <math><mrow><msup><mn>2</mn><mn>5</mn></msup><mo>=</mo><mn>32</mn></mrow></math>                | <math><mrow><mn>32</mn><mo>&minus;</mo><mn>1</mn><mo>=</mo><mn>31</mn></mrow></math>                                                                                                           |                                                                                                                                                                                                |                                                                                                                                                                                                |                                                                                                                                                                                                |                                                                                                                                                                                                                              |
| <math><mrow><msup><mn>3</mn><mn>5</mn></msup><mo>=</mo><mn>243</mn></mrow></math>               | <math><mrow><mn>243</mn><mo>&minus;</mo><mn>32</mn><mo>=</mo><mn>211</mn></mrow></math>                                                                                                        | <math><mrow><mn>211</mn><mo>&minus;</mo><mn>31</mn><mo>=</mo><mn>180</mn></mrow></math>                                                                                                        |                                                                                                                                                                                                |                                                                                                                                                                                                |                                                                                                                                                                                                                              |
| <math><mrow><msup><mn>4</mn><mn>5</mn></msup><mo>=</mo><mn>1024</mn></mrow></math>              | <math><mrow><mn>1024</mn><mo>&minus;</mo><mn>243</mn><mo>=</mo><mn>781</mn></mrow></math>                                                                                                      | <math><mrow><mn>781</mn><mo>&minus;</mo><mn>211</mn><mo>=</mo><mn>570</mn></mrow></math>                                                                                                       | <math><mrow><mn>570</mn><mo>&minus;</mo><mn>180</mn><mo>=</mo><mn>390</mn></mrow></math>                                                                                                       |                                                                                                                                                                                                |                                                                                                                                                                                                                              |
| <math><mrow><msup><mn>5</mn><mn>5</mn></msup><mo>=</mo><mn>3125</mn></mrow></math>              | <math><mrow><mn>3125</mn><mo>&minus;</mo><mn>1024</mn><mo>=</mo><mn>2101</mn></mrow></math>                                                                                                    | <math><mrow><mn>2101</mn><mo>&minus;</mo><mn>781</mn><mo>=</mo><mn>1320</mn></mrow></math>                                                                                                     | <math><mrow><mn>1320</mn><mo>&minus;</mo><mn>570</mn><mo>=</mo><mn>750</mn></mrow></math>                                                                                                      | <math><mrow><mn>750</mn><mo>&minus;</mo><mn>390</mn><mo>=</mo><mn>360</mn></mrow></math>                                                                                                       |                                                                                                                                                                                                                              |
| <math><mrow><msup><mn>6</mn><mn>5</mn></msup><mo>=</mo><mn>7776</mn></mrow></math>              | <math><mrow><mn>7776</mn><mo>&minus;</mo><mn>3125</mn><mo>=</mo><mn>4651</mn></mrow></math>                                                                                                    | <math><mrow><mn>4651</mn><mo>&minus;</mo><mn>2101</mn><mo>=</mo><mn>2550</mn></mrow></math>                                                                                                    | <math><mrow><mn>2550</mn><mo>&minus;</mo><mn>1320</mn><mo>=</mo><mn>1230</mn></mrow></math>                                                                                                    | <math><mrow><mn>1230</mn><mo>&minus;</mo><mn>750</mn><mo>=</mo><mn>480</mn></mrow></math>                                                                                                      | <math><mrow><mn>480</mn><mo>&minus;</mo><mn>360</mn><mo>=</mo><mn>120</mn></mrow></math>                                                                                                                                     |
| <math><mrow><msup><mn>7</mn><mn>5</mn></msup><mo>=</mo><mn>16807</mn></mrow></math>             | <math><mrow><mn>16807</mn><mo>&minus;</mo><mn>7776</mn><mo>=</mo><mn>9031</mn></mrow></math>                                                                                                   | <math><mrow><mn>9031</mn><mo>&minus;</mo><mn>4651</mn><mo>=</mo><mn>4380</mn></mrow></math>                                                                                                    | <math><mrow><mn>4380</mn><mo>&minus;</mo><mn>2550</mn><mo>=</mo><mn>1830</mn></mrow></math>                                                                                                    | <math><mrow><mn>1830</mn><mo>&minus;</mo><mn>1230</mn><mo>=</mo><mn>600</mn></mrow></math>                                                                                                     | <math><mrow><mn>600</mn><mo>&minus;</mo><mn>480</mn><mo>=</mo><mn>120</mn></mrow></math>                                                                                                                                     |
| <math><mrow><msup><mn>8</mn><mn>5</mn></msup><mo>=</mo><mn>32768</mn></mrow></math>             | <math><mrow><mn>32768</mn><mo>&minus;</mo><mn>16807</mn><mo>=</mo><mn>15961</mn></mrow></math>                                                                                                 | <math><mrow><mn>15961</mn><mo>&minus;</mo><mn>9031</mn><mo>=</mo><mn>6930</mn></mrow></math>                                                                                                   | <math><mrow><mn>6930</mn><mo>&minus;</mo><mn>4380</mn><mo>=</mo><mn>2550</mn></mrow></math>                                                                                                    | <math><mrow><mn>2550</mn><mo>&minus;</mo><mn>1830</mn><mo>=</mo><mn>720</mn></mrow></math>                                                                                                     | <math><mrow><mn>720</mn><mo>&minus;</mo><mn>600</mn><mo>=</mo><mn>120</mn></mrow></math>                                                                                                                                     |
| <math><mrow><msup><mn>9</mn><mn>5</mn></msup><mo>=</mo><mn>59049</mn></mrow></math>             | <math><mrow><mn>59049</mn><mo>&minus;</mo><mn>32768</mn><mo>=</mo><mn>26281</mn></mrow></math>                                                                                                 | <math><mrow><mn>26281</mn><mo>&minus;</mo><mn>15961</mn><mo>=</mo><mn>10320</mn></mrow></math>                                                                                                 | <math><mrow><mn>10320</mn><mo>&minus;</mo><mn>6930</mn><mo>=</mo><mn>3390</mn></mrow></math>                                                                                                   | <math><mrow><mn>3390</mn><mo>&minus;</mo><mn>2550</mn><mo>=</mo><mn>840</mn></mrow></math>                                                                                                     | <math><mrow><mn>840</mn><mo>&minus;</mo><mn>720</mn><mo>=</mo><mn>120</mn></mrow></math>                                                                                                                                     |
| <math><mrow><msup><mn>10</mn><mn>5</mn></msup><mo>=</mo><mn>100000</mn></mrow></math>           | <math><mrow><mn>100000</mn><mo>&minus;</mo><mn>59049</mn><mo>=</mo><mn>40951</mn></mrow></math>                                                                                                | <math><mrow><mn>40951</mn><mo>&minus;</mo><mn>26281</mn><mo>=</mo><mn>14670</mn></mrow></math>                                                                                                 | <math><mrow><mn>14670</mn><mo>&minus;</mo><mn>10320</mn><mo>=</mo><mn>4350</mn></mrow></math>                                                                                                  | <math><mrow><mn>4350</mn><mo>&minus;</mo><mn>3390</mn><mo>=</mo><mn>960</mn></mrow></math>                                                                                                     | <math><mrow><mn>960</mn><mo>&minus;</mo><mn>840</mn><mo>=</mo><mn>120</mn></mrow></math>                                                                                                                                     |
{% endfigure %}

After playing for a little while, I got this (again, this originally is the even power version):

{% figure "It’s getting interesting." %}
<math>
  <mstyle displaystyle="true">
    <msup>
      <mi>x</mi>
      <mi>n</mi>
    </msup>
    <mo>=</mo>
    <mn>1</mn>
    <mo>&plus;</mo>
    <mstyle displaystyle="false">
      <mo>(</mo>
      <mi>x</mi>
      <mo>&minus;</mo>
      <mn>1</mn>
      <mo>)</mo>
    </mstyle>
    <mo>&times;</mo>
    <munderover>
      <mo>&sum;</mo>
      <mrow>
        <mi>i</mi>
        <mo>=</mo>
        <mn>0</mn>
      </mrow>
      <mrow>
        <mi>n</mi>
        <mo>&minus;</mo>
        <mn>1</mn>
      </mrow>
    </munderover>
    <msup>
      <mi>x</mi>
      <mi>i</mi>
    </msup>
    <mn>&nbsp;</mn>
    <mo>;</mo>
    <mn>&ensp;</mn>
    <mi>x</mi>
    <mo>&isin;</mo>
    <mn>&rationals;</mn>
    <mo>,</mo>
    <mn>&nbsp;</mn>
    <mi>n</mi>
    <mo>&isin;</mo>
    <mn>&naturals;</mn>
  </mstyle>
</math>
{% endfigure %}

Let’s see it in action.

{% figure "MathML is cool only until you actually start using it." %}
<math>
  <mtable>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mstyle displaystyle="false"><mo>(</mo><mn>4</mn><mo>&minus;</mo><mn>1</mn><mo>)</mo></mstyle><mo>&times;</mo><munderover><mo>&sum;</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mrow><mn>3</mn><mo>&minus;</mo><mn>1</mn></mrow></munderover><msup><mn>4</mn><mi>i</mi></msup></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>&plus;</mo><msup><mn>4</mn><mn>1</mn></msup><mo>&plus;</mo><msup><mn>4</mn><mn>2</mn></msup><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>4</mn><mo>&plus;</mo><mn>16</mn><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mn>21</mn></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>63</mn></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>64</mn></mrow>
      </mtd>
    </mtr>
  </mtable>
</math>
{% endfigure %}

However, since we have more exponentiation inside the summation, we can do this recursively ~~just to make it look bigger~~.

{% figure "Why do I do these things to myself?!" %}
<math>
  <mtable>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mstyle displaystyle="false"><mo>(</mo><mn>4</mn><mo>&minus;</mo><mn>1</mn><mo>)</mo></mstyle><mo>&times;</mo><munderover><mo>&sum;</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mrow><mn>3</mn><mo>&minus;</mo><mn>1</mn></mrow></munderover><msup><mn>4</mn><mi>i</mi></msup></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>&plus;</mo><msup><mn>4</mn><mn>1</mn></msup><mo>&plus;</mo><msup><mn>4</mn><mn>2</mn></msup><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>)</mo><mo>)</mo><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>&plus;</mo><msup><mn>4</mn><mn>1</mn></msup><mo>)</mo><mo>)</mo><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>)</mo><mo>)</mo><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>4</mn><mn>0</mn></msup><mo>)</mo><mo>)</mo><mo>)</mo><mo>)</mo><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>)</mo><mo>)</mo><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>)</mo><mo>)</mo><mo>)</mo><mo>)</mo><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>)</mo><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>)</mo><mo>)</mo><mo>)</mo><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>4</mn><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>4</mn><mo>)</mo><mo>)</mo><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>5</mn><mo>&plus;</mo><mo>(</mo><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mn>5</mn><mo>)</mo><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mo>(</mo><mn>5</mn><mo>&plus;</mo><mn>1</mn><mo>&plus;</mo><mn>15</mn><mo>)</mo></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>1</mn><mo>&plus;</mo><mn>3</mn><mo>&sdot;</mo><mn>21</mn></mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup><mn>4</mn><mn>3</mn></msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow><mn>64</mn></mrow>
      </mtd>
    </mtr>
  </mtable>
</math>
{% endfigure %}

## The final unfolding

As you can see, the formula has limitations; it would be nicer if it could handle fractional exponents.
This is what I’ve been addressing after all these years because I only recollected this recently.

The tip lies in the leading <math><mn>1</mn></math>; we can express it as <math><msup><mi>x</mi><mn>0</mn></msup></math>.
This zero exponent is the same zero on the sum lower bound, and both actually are the fractional part of <math><mi>n</mi></math>&mdash;which has been only integers up to now.

Applying it, we finally have this beauty:

{% figure "I’m feeling so dang smart." %}
  <math>
    <mstyle displaystyle="true">
      <msup>
        <mi>x</mi>
        <mi>n</mi>
      </msup>
      <mo>=</mo>
      <msup>
        <mi>x</mi>
        <mrow>
          <mi>n</mi>
          <mn>&nbsp;</mn>
          <mi>mod</mi>
          <mn>&nbsp;</mn>
          <mn>1</mn>
        </mrow>
      </msup>
      <mo>+</mo>
      <mstyle displaystyle="false">
        <mo>(</mo>
        <mi>x</mi>
        <mo>&minus;</mo>
        <mn>1</mn>
        <mo>)</mo>
      </mstyle>
      <mo>&times;</mo>
      <munderover>
        <mo>&sum;</mo>
        <mrow>
          <mi>i</mi>
          <mo>=</mo>
          <mi>n</mi>
          <mn>&nbsp;</mn>
          <mi>mod</mi>
          <mn>&nbsp;</mn>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mi>n</mi>
          <mo>&minus;</mo>
          <mn>1</mn>
        </mrow>
      </munderover>
      <msup>
        <mi>x</mi>
        <mi>i</mi>
      </msup>
      <mn>&nbsp;</mn>
      <mo>;</mo>
      <mn>&ensp;</mn>
      <mi>x</mi>
      <mo>&isin;</mo>
      <mn>&rationals;</mn>
      <mo>,</mo>
      <mn>&nbsp;</mn>
      <mi>n</mi>
      <mo>&isin;</mo>
      <msub>
        <mn>&rationals;</mn>
        <mo>&plus;</mo>
      </msub>
    </mstyle>
  </math>
{% endfigure %}

Or if you are not a fan of using non-integers values in sum bounds (I don’t even know if that is strictly correct to be honest), this one is for you:

{% figure %}
  <math>
    <mstyle displaystyle="true">
      <msup>
        <mi>x</mi>
        <mi>n</mi>
      </msup>
      <mo>=</mo>
      <msup>
        <mi>x</mi>
        <mrow>
          <mi>n</mi>
          <mn>&nbsp;</mn>
          <mi>mod</mi>
          <mn>&nbsp;</mn>
          <mn>1</mn>
        </mrow>
      </msup>
      <mo>+</mo>
      <mstyle displaystyle="false">
        <mo>(</mo>
        <mi>x</mi>
        <mo>&minus;</mo>
        <mn>1</mn>
        <mo>)</mo>
      </mstyle>
      <mo>&times;</mo>
      <munderover>
        <mo>&sum;</mo>
        <mrow>
          <mi>i</mi>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
        <mrow>
          <mo>&lfloor;</mo>
          <mi>n</mi>
          <mo>&rfloor;</mo>
          <mo>&minus;</mo>
          <mn>1</mn>
        </mrow>
      </munderover>
      <msup>
        <mi>x</mi>
        <mrow>
          <mi>i</mi>
          <mo>&plus;</mo>
          <mi>n</mi>
          <mn>&nbsp;</mn>
          <mi>mod</mi>
          <mn>&nbsp;</mn>
          <mn>1</mn>
        </mrow>
      </msup>
      <mn>&nbsp;</mn>
      <mo>;</mo>
      <mn>&ensp;</mn>
      <mi>x</mi>
      <mo>&isin;</mo>
      <mn>&rationals;</mn>
      <mo>,</mo>
      <mn>&nbsp;</mn>
      <mi>n</mi>
      <mo>&isin;</mo>
      <msub>
        <mn>&rationals;</mn>
        <mo>&plus;</mo>
      </msub>
    </mstyle>
  </math>
{% endfigure %}

But the latter is kinda ugly, so I’ll stick with the former. Judge me.

Let’s put it to the test.

{% figure "This is the last time I do this. No, I’m not doing the recursive version. That’s it." %}
  <math>
    <mtable>
      <mtr>
        <mtd>
          <msup><mn>81</mn><mn>3.25</mn></msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mrow><msup><mn>81</mn><mrow><mn>3.25</mn><mn>&nbsp;</mn><mi>mod</mi><mn>&nbsp;</mn><mn>1</mn></mrow></msup><mo>&plus;</mo><mstyle displaystyle="false"><mo>(</mo><mn>81</mn><mo>&minus;</mo><mn>1</mn><mo>)</mo></mstyle><mo>&times;</mo><munderover><mo>&sum;</mo><mrow><mi>i</mi><mo>=</mo><mn>3.25</mn><mn>&nbsp;</mn><mi>mod</mi><mn>&nbsp;</mn><mn>1</mn></mrow><mrow><mn>3.25</mn><mo>&minus;</mo><mn>1</mn></mrow></munderover><msup><mn>81</mn><mi>i</mi></msup></mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msup><mn>81</mn><mn>3.25</mn></msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mrow><msup><mn>81</mn><mn>0.25</mn></msup><mo>&plus;</mo><mn>80</mn><mo>&sdot;</mo><mo>(</mo><msup><mn>81</mn><mn>0.25</mn></msup><mo>&plus;</mo><msup><mn>81</mn><mn>1.25</mn></msup><mo>&plus;</mo><msup><mn>81</mn><mn>2.25</mn></msup><mo>)</mo></mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msup><mn>81</mn><mn>3.25</mn></msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mrow><mn>3</mn><mo>&plus;</mo><mn>80</mn><mo>&sdot;</mo><mo>(</mo><mn>3</mn><mo>&plus;</mo><mn>243</mn><mo>&plus;</mo><mn>19683</mn><mo>)</mo></mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msup><mn>81</mn><mn>3.25</mn></msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mrow><mn>3</mn><mo>&plus;</mo><mn>80</mn><mo>&sdot;</mo><mn>19929</mn></mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msup><mn>81</mn><mn>3.25</mn></msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mrow><mn>3</mn><mo>&plus;</mo><mn>1594320</mn></mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msup><mn>81</mn><mn>3.25</mn></msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mrow><mn>1594323</mn></mrow>
        </mtd>
      </mtr>
    </mtable>
  </math>
{% endfigure %}

It works when each individual calculation (e.g. <math><msup><mn>81</mn><mn>1.25</mn></math>) renders a fraction; I simply picked one that doesn’t do that in order to keep things easier to read.

### Some code

Here you can check out the equation in Go:

```go
package main

import (
  "fmt"
  "math"
  "math/cmplx"
)

var memo = make(map[float64]map[float64]complex128)

func Pow(x, n float64) complex128 {
  if r1 := memo[x]; r1 != nil {
    if xpown := r1[n]; xpown != 0 {
      return xpown
    }
  } else {
    memo[x] = make(map[float64]complex128)
  }
  // n mod 1
  nmod1 := math.Mod(n, 1)
  // x^(n mod 1)
  xpownmod1 := cmplx.Pow(complex(x, 0), complex(nmod1, 0))
  // (x - 1)
  xminus1 := complex(x-1, 0)
  // n - 1
  nminus1 := n - 1
  // sum
  var sum complex128
  for i := nmod1; i <= nminus1; i++ {
    sum += Pow(x, i)
  }
  // x^n
  xpown := xpownmod1 + xminus1*sum
  memo[x][n] = xpown
  return xpown
}

func main() {
  x := float64(-4)
  n := float64(3.5)
  builtin := cmplx.Pow(complex(x, 0), complex(n, 0))
  custom := Pow(x, n)
  fmt.Printf("           (%v^%v)\n", x, n)
  fmt.Printf("built-in = %v\n", builtin)
  fmt.Printf("  custom = %v\n", custom)
}
// prints:
//            (-4^3.5)
// built-in = (-5.4864176601801346e-14-128i)
//   custom = (-7.83773951454305e-15-128i)
```

And the exact same thing but in C++ (written for confirmation purposes):

```cpp
#include <iostream>
#include <complex>
#include <unordered_map>

using namespace std;

unordered_map<double, unordered_map<double, complex<double>>> memo;

complex<double> Pow(double x, double n) {
  if (auto r1 = memo.find(x); r1 != memo.end()) {
    if (auto xpown = r1->second.find(n); xpown != r1->second.end()) {
      return xpown->second;
    }
  }
  // n mod 1
  double nmod1 = fmod(n, 1);
  // x^(n mod 1)
  complex<double> xpownmod1 = pow(complex<double>(x, 0), complex<double>(nmod1, 0));
  // (x - 1)
  complex<double> xminus1 = complex<double>(x-1, 0);
  // n - 1
  double nminus1 = n - 1;
  // sum
  complex<double> sum;
  for (double i = nmod1; i <= nminus1; i++) {
    sum += Pow(x, i);
  }
  // x^n
  complex<double> xpown = xpownmod1 + xminus1*sum;
  memo[x][n] = xpown;
  return xpown;
}

int main() {
  double x = -4;
  double n = 3.5;
  complex<double> builtin = pow(complex<double>(x, 0), complex<double>(n, 0));
  complex<double> custom = Pow(x, n);
  cout << "           (" << x << "^" << n << ")\n";
  cout << "built-in = " << builtin << "\n";
  cout << "  custom = " << custom << "\n";
}
// prints:
//            (-4^3.5)
// built-in = (-5.48642e-14,-128)
//   custom = (-7.83774e-15,-128)
```

Side note: I chose <math><mrow><msup><mrow><mo>&minus;</mo><mn>4</mn></mrow><mn>3.5</mn></msup></mrow></math> on purpose to show this interesting computational behavior, that when the result has anything to do with complex numbers, the imaginary part is correct, but the real part shows a super small value while it should be zero.
Also, since built-in and custom methods are calculated in different ways, they end up being different from each other, however they are at least consistent across these two languages.

That guy has something to share with us about it:

{% picture "chatgpt-1.png", "Let him cook." %}
{% picture "chatgpt-2.png", "So far so good..." %}
{% picture "chatgpt-3.png", "Never seen this before, not gonna lie." %}
{% picture "chatgpt-4.png", "Unfortunately it didn’t fit in the previous screenshot." %}
{% picture "chatgpt-5.png", "Lots of stuff to inquire..." %}
{% picture "chatgpt-6.png", "What a polite gentleman." %}
{% picture "chatgpt-7.png", "Jokes aside, this is a good answer indeed. You did it GPT-4o 👌" %}

### Final thoughts

Again, it’s been fun to spend some time getting my head around this, no matter what it is.
Please let me know what you think about it.
I mean it.

See you in the next one!
