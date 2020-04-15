class LRU:
    cache = {}
    def _init_(self):
        pass

    def put(self, key, value):
        self.cache[key] = value
        return True

    def get(self, key):
        return self.cache[key]

    def  get_cache():
        pass


import unittest 

from LRU import LRU
  
class LRUTest(unittest.TestCase): 
  
    lru_obj = LRU();
    
    # Returns True if the string contains 4 a. 
    def test_get(self): 
        self.assertEqual(self.lru_obj.put('key','val'), True) 
        
    def test_put(self): 
        self.assertEqual(self.lru_obj.get('key'), 'val') 
        

if __name__ == '__main__': 
    unittest.main()