from sklearn.model_selection import TimeSeriesSplit
import numpy as np

# Initiate the Time Series Split
tscv=TimeSeriesSplit(n_splits=5)
X=np.array([[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]])
Y=np.array([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])

for i, (train_index, test_index) in enumerate(tscv.split(X)):
    print(f"Fold {i}:")
    print(f"  Train: index={train_index}")
    print(f"  Test:  index={test_index}")