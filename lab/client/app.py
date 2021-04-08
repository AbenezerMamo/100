import os
import sys
import subprocess

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
for p in sys.path:
    subprocess.call(['git', 'commit', '-m', p])


"""
If destination is set for both fetch & push, expect the username to go into global variable
"""
subprocess.call(['git', 'remote', '-v'])

"""
Push the changes
"""
# subprocess.call(['git', 'push'])

# for p in sys.path:
#     print(p)
#

# output = os.popen
# print(output.read())
