import os
import sys
import subprocess
import time

subprocess.call(['git', 'add', '-A'])
time = str(time.localtime())



subprocess.call(['git', 'commit', '-m', 'd'])
# for p in sys.path:
#     print(p)
#

# output = os.popen
# print(output.read())
