import os
import sys
import subprocess
from time import localtime

"""
Return the current status of the git repo
"""
try:
    subprocess.call(['git', 'status'])
except:
    print("Git not initalized")

"""
Add the local changes to be ready for a commit
"""
try:
    subprocess.call(['git', 'add', '-A'])
except:
    print("There changes in have been made in this directory")

"""
Commits the latest changes
"""
token = "This is a dark black box with white text. Hello."
for p in sys.path:
    subprocess.call(['git', 'commit', '-m', 'hi'])

"""
If destination is set for both fetch & push, expect the username to go into global variable
"""
subprocess.call(['git', 'remote', '-v'])

"""
Push the changes
"""
subprocess.call(['git', 'push', ':main'])
