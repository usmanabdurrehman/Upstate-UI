from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

import matplotlib.pyplot as plt
import numpy as np

x=np.array([[1, 1.5],
 [1.5, 3],
 [3, 4.5],
 [4.5, 6  ],
 [6, 7.5]])

'''
[[0.07006589, 0.68666248],	r	r
 [0.60711436, 0.39584023],	b	r
 [0.80399346, 0.07935871],	b	b
 [0.23442971, 0.590407  ],	r	r
 [0.18691071, 0.06838892],	b	b
 [0.42888779, 0.20038427],	b	b
 [0.64327168, 0.07890886],	r	b
 [0.61609319, 0.47965547]]	r	r
rbbrbbrr
 [0 0 1 0 1 1 1 0]
'''


'''
rbbrbbrr
r => 0
b => 1
'''

plt.scatter(x[0,0],x[0,1])
plt.scatter(x[0,0],x[0,1])
plt.scatter(x[0,0],x[0,1])
plt.scatter(x[0,0],x[0,1])
plt.scatter(x[0,0],x[0,1])
plt.show()

y = [[0],[1],[1],[0],[1]]
# [0 0 1 0 1 1 1 0]
model = SVC(kernel='poly',degree=2)
model.fit(x,y)

print(accuracy_score(y,model.predict(x)))

print(model.predict(x))
