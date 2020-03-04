---
title: "Inheritance in Python"
date: 2019-12-14
tags: [Python]
header:
  image: "/images/Types-of-Inheritance.jpg"
excerpt: "Python Inheritance"
mathjax: "true"
---
It is a universal fact that every student is a person. This is in hindsight of
non-human students if any. To depict this relationship, we take an illustration.

                      Person
                        ^
                        |
                      Student
The relationship from person to a student is termed ‘Specialization’. Conversely,
every student is a person, this is called Generalization. In this representation,
we use an arrow towards the base class as a UML (Unified Modeling Language) convention.
Here, Person can be called any of the following:

    1. Super Class
    2. Parent Class
    3. Base Class

Likewise, Student here is:

    1. Sub Class
    2. Child Class
    3. Derived Class              


# Python Inheritance Syntax
To make a class inherit from another, we apply the name of the base class in parentheses to the derived class’ definition.


```python
class Person:
    pass
class Student(Person):
    pass
issubclass(Student, Person), issubclass(Person, Student)
```




    (True, False)


Here, class Student inherits from class Person. Here, since we only want to focus
on the python syntax, we use the ‘pass’ statement in the bodies of the classes.
Also, we use the function issubclass() to confirm that student is a subclass of person.
# Types of Inheritance in Python
There are five types of inheritance in python, we observe.
a. Single Inheritance in Python
A single Python inheritance is when a single class inherits from a class.

```python
x = 0
class fruit:
    def __init__(self):
        global x
        x += 1
        print('I am a fruit.')

class citrus(fruit):
    def __init__(self):
        super().__init__()
        global x
        x += 2
        print('I am citrus')
x
```




    0




```python
lime = citrus()
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-183-68948fd03373> in <module>()
    ----> 1 lime = citrus()


    <ipython-input-182-763b734482c6> in __init__(self)
          8 class citrus(fruit):
          9     def __init__(self):
    ---> 10         super().__init__()
         11         global x
         12         x += 2


    TypeError: super() takes at least 1 argument (0 given)



```python
x
```




    2




```python

```
