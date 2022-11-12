import setuptools

setuptools.setup(
    name="app",
    version="0.0.0",
    author="Devecor",
    description="A small example package",
    long_description_content_type="text/markdown",
    url="https://github.com/DevecorSoft/read-version",
    project_urls={
        "Bug Tracker": "https://github.com/DevecorSoft/read-version/issues",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    package_dir={"": "."},
    packages=setuptools.find_packages(where="."),
    python_requires=">=3.6",
)
