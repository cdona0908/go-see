# Import relevant modules
import time
import pyautogui
import mouse

# Give some time before python runs the rest of the code
time.sleep(2)

# Finding your mouse's current position on the screen
# print(pyautogui.position())

# The TikTok is located at x=550, y=520



for i in range(100):
    time.sleep(.4)
    pyautogui.moveTo(1515,1006)
    mouse.click('left')
    pyautogui.write('For the boys only check my liked videos')
    time.sleep(1.6)
    pyautogui.moveTo(1869,1005)
    mouse.click('left')
    time.sleep(1.85)
    pyautogui.moveTo(1337, 595)
    mouse.click('left')
    time.sleep(1.4)




