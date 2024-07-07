import unittest
from calculator import add, subtract, multiply, divide

class TestMain(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(1, 2), 3)
        self.assertEqual(add(-1, 4), 3)
        self.assertEqual(add(-1, -2), -3)
        self.assertEqual(add(1, 0), 1)

    def test_subtract(self):
        self.assertEqual(subtract(3, 2), 1)
        self.assertEqual(subtract(-1, 4), -5)
        self.assertEqual(subtract(-1, -2), 1)
        self.assertEqual(subtract(1, 0), 1)

    def test_multiply(self):
        self.assertEqual(multiply(1, 2), 2)
        self.assertEqual(multiply(-1, 4), -4)
        self.assertEqual(multiply(-1, -2), -3)
        self.assertEqual(multiply(1, 0), 1)

    def test_divide(self):
        self.assertEqual(divide(6, 2), 3)
        self.assertEqual(divide(5, 1), 5)
        self.assertEqual(divide(-10, -2), 5)
        self.assertEqual(divide(1, 1), 1)


if __name__ == "__main__":
    unittest.main